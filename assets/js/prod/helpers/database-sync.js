// Database-sync.js

var API_CONSTANTS = {
	authorization: 'Bearer keyIye3zskPSBMQ6Q',
	users_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Users',
	budgets_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Budgets',
	transactions_endpoint: 'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Transactions'
};

// A simple abstract xhr function, basically $.ajax but customized and a lot simpler
function simpleXHR(options) {

}


// Func: checkUser (userdata) -> if the user is in the db return true
function checkUser(userData) {
	var fetch; // @TODO Delete on compiled files
	var res;
	if (window.fetch) {
		// we will use fetch
		var Headers = new Headers();
		Headers.append('authorization', API_CONSTANTS.authorization);
		var init = {
			method: 'GET',
			headers: Headers,
			mode: 'cors',
			cache: 'default'
		};
		fetch(API_CONSTANTS.users_endpoint, init)
			.then(function(response) {
				if(res.ok) {
					res.json().then(function(data) {
						console.log(data);
					});
				} else {

				}
			});
	} else {
		// xhr I guess
		simpleXHR()
	}
}