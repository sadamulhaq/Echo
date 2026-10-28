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

import pytest

from app.tools.shopify_order_access import (
    EMAIL_REQUIRED,
    INVALID_ORDER_NUMBER,
    ORDER_NUMBER_REQUIRED,
    build_order_search,
    order_belongs_to,
    order_lookup_problem,
    order_number_matches,
)


@pytest.mark.parametrize("email", ["a@example.com", "First.Last+tag@shop.co.uk", " A@Example.com "])
def test_plain_emails_pass(email):
    assert order_lookup_problem(email, "1001") is None


@pytest.mark.parametrize("email", [None, "", "a@b", "a b@example.com", "*@example.com",
                                   "a@example.com OR name:1", 'a"@example.com', "a@(example).com"])
def test_emails_that_could_widen_the_search_are_refused(email):
    assert order_lookup_problem(email, "1001") == EMAIL_REQUIRED


def test_order_number_is_optional_unless_required():
    assert order_lookup_problem("a@example.com", None) is None
    assert order_lookup_problem("a@example.com", " # ", number_required=True) == ORDER_NUMBER_REQUIRED


@pytest.mark.parametrize("number", ["#1001", "1001", "SHOP-1001-UK"])
def test_order_number_formats_pass(number):
    assert order_lookup_problem("a@example.com", number, number_required=True) is None


@pytest.mark.parametrize("number", ["10 OR 1", "-1001", "1001*", "name:1001"])
def test_order_numbers_with_search_syntax_are_refused(number):
    assert order_lookup_problem("a@example.com", number) == INVALID_ORDER_NUMBER


def test_build_order_search():
    assert build_order_search(" A@Example.com ") == "email:a@example.com"
    assert build_order_search("a@example.com", "#1001") == "email:a@example.com AND name:1001"


def test_order_belongs_to_order_or_customer_email():
    assert order_belongs_to({"email": "A@example.com"}, "a@example.com")
    assert order_belongs_to({"email": None, "customer": {"email": "a@example.com"}}, "a@example.com")
    assert not order_belongs_to({"email": "b@example.com", "customer": None}, "a@example.com")
    assert not order_belongs_to({"email": None, "customer": None}, "")


def test_order_number_matches_exactly():
    assert order_number_matches({"name": "#1001"}, "1001")
    assert order_number_matches({"name": "#1001"}, None)
    assert not order_number_matches({"name": "#10010"}, "1001")
