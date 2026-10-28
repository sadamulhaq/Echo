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

When the agent may offer tappable choices (ChatResponse.quick_replies).

Only given to agents on a channel that can show buttons, so every other
surface keeps an unchanged prompt. It is appended to the agent's
instructions — rules placed in a top-of-prompt policy block get ignored.
"""

from app.channels.constants import MAX_CHOICE_OPTIONS
from app.channels.interactive_limits import InteractiveLimits


def choice_instructions(limits: InteractiveLimits) -> str:
    """What the agent is told about offering choices on a channel with these limits."""
    most = min(limits.max_buttons, MAX_CHOICE_OPTIONS) if not limits.supports_list else MAX_CHOICE_OPTIONS
    shown = (f"up to {limits.max_buttons} short options show as buttons, more as a list"
             if limits.supports_list else "they show as buttons")
    return (
        "This customer's app can show tappable choices. When your reply asks them to "
        "pick from a small, fixed set of options — a yes/no confirmation, which product, "
        "a time slot — still ask the question in `message`, and put the options in "
        f"`quick_replies`: at most {most}, each under {limits.button_title_max} characters "
        f"where you can ({shown}). "
        "Don't list the options again inside `message`. Leave `quick_replies` empty for "
        "open questions, for answers they must type (a name, an email, an order number), "
        "and when you are simply answering."
    )
