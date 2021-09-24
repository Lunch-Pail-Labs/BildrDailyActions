var val;
if (INPUT_ARGUMENTS.exp) {
    val = {
        "url": "https://api.daily.co/v1/rooms",
        "headers": {
            "Content-Type": "Application/Json",
            "Authorization": "Bearer " + INPUT_ARGUMENTS.secret
        },
        "method": "POST",
        "content": {
            "properties": {
                "enable_network_ui": "false",
                "enable_new_call_ui": "true",
                "enable_prejoin_ui": "true",
                "enable_screenshare": INPUT_ARGUMENTS.screenshare,
                "enable_chat": INPUT_ARGUMENTS.chat,
                "owner_only_broadcast": INPUT_ARGUMENTS.broadcast,
                "enable_knocking": INPUT_ARGUMENTS.knocking,
                "nbf": INPUT_ARGUMENTS.nbf,
                "exp": INPUT_ARGUMENTS.exp,
                "lang": INPUT_ARGUMENTS.lang
            },
            "privacy": INPUT_ARGUMENTS.privacy
        }
    }
}

if (!INPUT_ARGUMENTS.exp) {
    val = {
        "url": "https://api.daily.co/v1/rooms",
        "headers": {
            "Content-Type": "Application/Json",
            "Authorization": "Bearer " + INPUT_ARGUMENTS.secret
        },
        "method": "POST",
        "content": {
            "properties": {
                "enable_network_ui": "false",
                "enable_new_call_ui": "true",
                "enable_prejoin_ui": "true",
                "enable_screenshare": INPUT_ARGUMENTS.screenshare,
                "enable_chat": INPUT_ARGUMENTS.chat,
                "owner_only_broadcast": INPUT_ARGUMENTS.broadcast,
                "enable_knocking": INPUT_ARGUMENTS.knocking,
                "nbf": INPUT_ARGUMENTS.nbf,
                "lang": INPUT_ARGUMENTS.lang
            },
            "privacy": INPUT_ARGUMENTS.privacy
        }
    }
}

RESPONSE_OBJECT.OUTPUT_ARGUMENTS.content = val;
console.log(val);