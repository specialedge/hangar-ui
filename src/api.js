// const API_END_POINT = ""; // todo: Actual end API end point
const API_END_POINT = "http://0.0.0.0:8080/"; // For running locally, please see note below:
/*
	You will have to disable the same origin policy on Chrome for the API to work with the UI.
	Note - Close all Chrome windows before running this:
	$ open -a Google\ Chrome --args --disable-web-security --user-data-dir
	And to re-enable, close all Chrome windows and restart. It should go back to normal
*/

function makeRequest(url) {
	try {
		var xhttp = new XMLHttpRequest();
		xhttp.open("GET", url, false); 
		xhttp.send();
		return xhttp.responseText;
	}
	catch(err) {
		console.log(err.message);
		return "### Error! Could not connect to API ###"
	}
}

module.exports = {
	getHealthCheck: function () {
		var requestURL = API_END_POINT + 'healthcheck';
		var response = makeRequest(requestURL);
		return response;
	}
};