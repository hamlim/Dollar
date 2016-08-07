// home Controller

var debug = {};

var state = {};

if(JSON.parse(localStorage.getItem('dollar'))) {
	state = JSON.parse(localStorage.getItem('dollar'));

} else {
	window.location.href = './login.html';
}