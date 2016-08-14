// Database-sync.js

const API_CONSTANTS = {
	authorization: 'Bearer keyIye3zskPSBMQ6Q',
	users_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Users',
	budgets_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Budgets',
	transactions_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Transactions'
};

// A simple abstract xhr function, basically $.ajax but customized and a lot simpler
function simpleXHR(options) {
	return fetch(options.endpoint, {
		method: options.method,
		headers: options.headers,
		mode: 'cors',
		body: JSON.stringify(options.package)
	}).then(function(response){
		return response.json();
	}).then(function(data) {
		return data;
	}).catch(function(error) {
		return false;
	});
}
function checkUser(userObj) {
	simpleXHR({
		endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Users',
		method: 'GET',
		headers: new Headers({
			'authorization': 'Bearer keyIye3zskPSBMQ6Q'
		})
	}).then(function(users) {
		console.log(users.records[0]);
		console.log(userObj);	
		for (var arr in users.records) {
			console.log(users.records[arr]);
			if(users.records[arr].fields.phone_number === userObj.phone.phone_number){
				// user exists, lets pass true
				console.log("Exists");
				setDollarState({
					type: "user",
					user: users.records[arr].fields
				}, state);
				setDollarState({
					type: "loggedin",
					loggedin: true
				}, state);
				window.location.href = "/index.html";
			}
		}
	});
}
