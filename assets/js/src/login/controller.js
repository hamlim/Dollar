// Login Controller

// Collect the elements we need

// State
let state = {};

if(localStorage.getItem('dollar')){
	state = JSON.parse(localStorage.getItem('dollar'));
	// Not logged in but they have been here before therefore we don't want to redirect to signup

} else {
	// no dollar data saved therefore we want to redirect to signup.html
	window.location.href = 'signup.html';
}