"""
Copyright 2024-2026 ChatterMate

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

"""Who may see a Shopify order through the chat agent.

Order numbers are sequential, so a number alone proves nothing. A shopper sees an
order only when they also give the email it was placed with, and that email matches
the order exactly. A wrong email and a missing order get the same answer, so the
reply never confirms that an order number exists.
"""

import re
from typing import Any, Dict, Optional

# Same reply for "no such order" and "not your order": never confirm an order exists.
ORDER_NOT_FOUND = (
    "No order matches that order number and email address. "
    "Ask the customer to check both against their order confirmation email."
)
EMAIL_REQUIRED = (
    "Ask the customer for the email address they used at checkout. "
    "Orders are only shared with the person who placed them."
)
ORDER_NUMBER_REQUIRED = "Ask the customer for their order number (for example #1001)."
INVALID_ORDER_NUMBER = "That doesn't look like an order number. Ask the customer to check it."

MAX_ORDER_RESULTS = 10

# Restricted to characters that are inert in Shopify search syntax (no spaces,
# quotes, colons, brackets or the * wildcard), so a value can't widen the query.
_EMAIL = re.compile(r"^[A-Za-z0-9.!#$%&'+/=?^_`{|}~-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$")
# Shopify order names can carry a custom prefix or suffix (e.g. "SHOP-1001-UK").
_ORDER_NUMBER = re.compile(r"^[A-Za-z0-9][A-Za-z0-9-]{0,31}$")


def normalise_email(email: Optional[str]) -> str:
    return (email or "").strip().lower()


def normalise_order_number(order_number: Optional[str]) -> str:
    return (order_number or "").strip().lstrip("#").strip().lower()


def order_lookup_problem(customer_email: Optional[str], order_number: Optional[str],
                         number_required: bool = False) -> Optional[str]:
    """Why this lookup can't run, or None when it can."""
    if not _EMAIL.match(normalise_email(customer_email)):
        return EMAIL_REQUIRED
    number = normalise_order_number(order_number)
    if not number:
        return ORDER_NUMBER_REQUIRED if number_required else None
    if not _ORDER_NUMBER.match(number):
        return INVALID_ORDER_NUMBER
    return None


def build_order_search(customer_email: str, order_number: Optional[str] = None) -> str:
    """Shopify search syntax for one customer's orders. Inputs must already pass
    order_lookup_problem, which limits them to characters inert in the syntax."""
    terms = [f"email:{normalise_email(customer_email)}"]
    number = normalise_order_number(order_number)
    if number:
        terms.append(f"name:{number}")
    return " AND ".join(terms)


def order_belongs_to(order: Dict[str, Any], customer_email: str) -> bool:
    """True when the email given matches the order's own email or its customer's."""
    wanted = normalise_email(customer_email)
    customer = order.get("customer") or {}
    return bool(wanted) and wanted in {
        normalise_email(order.get("email")),
        normalise_email(customer.get("email")),
    }


def order_number_matches(order: Dict[str, Any], order_number: Optional[str]) -> bool:
    """Exact match on the order name, so #1005 never returns #10050."""
    number = normalise_order_number(order_number)
    return not number or normalise_order_number(order.get("name")) == number
