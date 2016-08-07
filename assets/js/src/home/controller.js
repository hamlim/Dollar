// home Controller

let debug = {};

let state = {};

if(JSON.parse(localStorage.getItem('dollar'))) {
	state = JSON.parse(localStorage.getItem('dollar'));

} else {
	window.location.href = './login.html';
}