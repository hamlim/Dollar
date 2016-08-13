// Database-sync.js

const API_CONSTANTS = {
	authorization: 'Bearer keyIye3zskPSBMQ6Q',
	users_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Users',
	budgets_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Budgets',
	transactions_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Transactions'
};

// A simple abstract xhr function, basically $.ajax but customized and a lot simpler
function simpleXHR(options) {
	fetch(options.endpoint, {
		method: options.method,
		headers: options.headers,
		mode: 'cors'
	}).then(function(response){
		return response.json();
	}).then(function(data) {
		console.log(data);
		return true;
	}).catch(function(error) {
		console.log(error);
		return false;
	});
}

function addNewUser(userObj){
	let sendPkg = {
		'fields': {
			'phone_number': userObj.phone.phone_number,
			'firstname': userObj.name.first_name,
			'lastname': userObj.name.last_name,
			'verfied': userObj.phone.verfied.toString(),
			'email_address': userObj.email.email
		}
	};
	let result = simpleXHR({
		endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Users',
		method: 'POST',
		headers: new Headers({
			'authorization': 'Bearer keyIye3zskPSBMQ6Q',
			'Content-Type': 'application/json'
		}),
		package: sendPkg
	});
	return result;
}
