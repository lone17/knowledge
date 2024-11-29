---
aliases: 
tags: 
modified: 2024-07-29 10:25 AM +07:00
created: 2024-07-23 10:03 AM +07:00
---
```json
{
    "description": "New Rule",
    "manipulators": [
        {
            "from": {
                "key_code": "delete_or_backspace",
                "modifiers": {
                    "mandatory": [
                        "left_command"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "delete_or_backspace",
                    "modifiers": [
                        "left_option"
                    ]
                }
            ],
            "type": "basic"
        },
        {
            "conditions": [
                {
                    "bundle_identifiers": [
                        "com.apple.Terminal$"
                    ],
                    "type": "frontmost_application_unless"
                }
            ],
            "from": {
                "key_code": "home",
                "modifiers": {
                    "optional": [
                        "left_control",
                        "left_shift"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "left_arrow",
                    "modifiers": [
                        "left_command"
                    ]
                }
            ],
            "type": "basic"
        },
        {
            "conditions": [
                {
                    "bundle_identifiers": [
                        "com.apple.Terminal$"
                    ],
                    "type": "frontmost_application_unless"
                }
            ],
            "from": {
                "key_code": "end",
                "modifiers": {
                    "optional": [
                        "left_control",
                        "left_shift"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "right_arrow",
                    "modifiers": [
                        "left_command"
                    ]
                }
            ],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "left_arrow",
                "modifiers": {
                    "mandatory": [
                        "left_command"
                    ],
                    "optional": [
                        "left_shift"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "left_arrow",
                    "modifiers": [
                        "left_option"
                    ]
                }
            ],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "right_arrow",
                "modifiers": {
                    "mandatory": [
                        "left_command"
                    ],
                    "optional": [
                        "left_shift"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "right_arrow",
                    "modifiers": [
                        "left_option"
                    ]
                }
            ],
            "type": "basic"
        },
        {
            "from": {
                "key_code": "tab",
                "modifiers": {
                    "mandatory": [
                        "left_command"
                    ],
                    "optional": [
                        "left_shift"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "tab",
                    "modifiers": [
                        "left_control"
                    ]
                }
            ],
            "type": "basic"
        }
    ]
}
```