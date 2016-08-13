// State
var state = {};
function initState(state) {
	if(localStorage.getItem('dollar')) {
		// state already exists
		var dollar = JSON.parse(localStorage.getItem('dollar'));
		for (var prop in dollar) {
			state[prop] = dollar[prop];
		}
	} else {
		state.user = {};
		state.store = {};
	}
}
initState();

// @function setDollarState(object)
// @params obj, state
//   A js object with all the updated keys and values
// { type: "string", user|store: { key: val, key: val }}

function setDollarState(obj, state) {
	if(obj.type === "store") {
		for (var prop in obj.store) {
			state.store.prop = obj.store[prop];
		}
	} else {
		for (var prop$0 in obj.user) {
			state.user.prop = obj.user[prop$0];
		}
	}
	localStorage.setItem('dollar', JSON.stringify(state));
}
