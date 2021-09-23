var xhttp;
xhttp = new XMLHttpRequest();
var apikey = INPUT_ARGUMENTS.secret;
xhttp.open("POST", 'https://api.daily.co/v1/rooms');
if (INPUT_ARGUMENTS.headers) {
	var oHeaders = INPUT_ARGUMENTS.headers; /*try { 			oHeaders = JSON.parse(INPUT_ARGUMENTS.headers); 		} catch (e) { 			oHeaders = false; 		}*/ if (oHeaders) {
		for (var key in oHeaders) {
			if (oHeaders.hasOwnProperty(key)) {
				xhttp.setRequestHeader(key, oHeaders[key]);
			}
		}
	}
}
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200) {
        console.log(xhttp.responseText);
        console.log(xhttp.response);
        RESPONSE_OBJECT.OUTPUT_ARGUMENTS.httpStatus = xhttp.status;

        RESPONSE_OBJECT.OUTPUT_ARGUMENTS.response = xhttp.response;
        try {
            var data = JSON.parse(xhttp.responseText);
            if (bapi.helper.isString(data)) data = JSON.parse(data);

            RESPONSE_OBJECT.OUTPUT_ARGUMENTS.response = data;
            RESPONSE_OBJECT.OUTPUT_ARGUMENTS.content = data;
            RESPONSE_OBJECT.OUTPUT_ARGUMENTS.statusCode = data.statusCode;
        } catch (e) { }

        QueueExecNextActions(QUEUE_ACTION);

    }
};
let data = {
    headers: {
      Authorization: 'Bearer ' + apikey
    },body: JSON.stringify({properties: {
    enable_network_ui: false,
    enable_new_call_ui: true,
    enable_prejoin_ui: true,
    enable_screenshare: INPUT_ARGUMENTS.screenshare,
    enable_chat: INPUT_ARGUMENTS.chat,
    owner_only_broadcast: INPUT_ARGUMENTS.broadcast,
    enable_knocking: INPUT_ARGUMENTS.knocking,
    lang: INPUT_ARGUMENTS.lang
},
  privacy: INPUT_ARGUMENTS.privacy})
}

xhttp.send(data);
