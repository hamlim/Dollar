// Components.jsx

let HeaderLoggedIn = React.createClass({
	logoutUser: function(e){
		e.preventDefault();
		setDollarState({
			'loggedIn': false
		});
		window.location.href = './login.html';
	},
	render: function() {
		return (
			<nav className='headernav center' role='navigation'>
				<ul className='headernav-links no-margin'>
					<li><a href='./index.html' className='headernav-link'>Home</a></li>
					<li><a href='./records.html' className='headernav-link active-link'>Records</a></li>
					<li><a href='./analysis.html' className='headernav-link'>Analysis</a></li>
					<li><a href='./budgets.html' className='headernav-link'>Budgets</a></li>
					<li><a href='./settings.html' className='headernav-link'>Settings</a></li>
					<li><a href='#' onClick={this.logoutUser} className='headernav-link'>Logout</a></li>
				</ul>
			</nav>
		)
	}
});
let HeaderNotLoggedIn = React.createClass({
	render: function() {
		return (
			<nav className='headernav center' role='navigation'>
				<ul className='headernav-links'>
					<li><a href='./login.html' className='headernav-link'>Login</a></li>
					<li><a href='./signup.html' className='headernav-link'>Signup</a></li>
				</ul>
			</nav>
		)
	}
});

let headerMount = document.getElementsByClassName('js-headerMount')[0];
let location = window.location.pathname;
if(location === '/records.html') {
	if(localStorage.dollar) {
		if(state.loggedIn === true ) {
			ReactDOM.render(<HeaderLoggedIn />, headerMount);
		} else {
			window.location.href = '/login.html';
		}
	} else {
		window.location.href = '/signup.html';
	}
} 
// Records Components
let appMount = document.getElementsByClassName('js-appMount')[0];

