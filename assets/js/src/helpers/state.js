

// @function setDollarState(object)
// @params obj 
//   A js object with all the updated keys and values

function setDollarState(obj) {
	let state = JSON.parse(localStorage.getItem('dollar'));
	for (let prop in obj) {
		state.prop = obj[prop];
	}
	localStorage.setItem('dollar', JSON.stringify(state));
}