// State
const state = {};
function initState(state) {
	if(localStorage.getItem('dollar')) {
		// state already exists
		let dollar = JSON.parse(localStorage.getItem('dollar'));
		for (let prop in dollar) {
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
		for (let prop in obj.store) {
			state.store.prop = obj.store[prop];
		}
	} else {
		for (let prop in obj.user) {
			state.user.prop = obj.user[prop];
		}
	}
	localStorage.setItem('dollar', JSON.stringify(state));
}
