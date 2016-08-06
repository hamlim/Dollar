// Components.jsx

let HeaderLoggedIn = React.createClass({
	render: function() {
		return (
			<nav className='headernav center' role='navigation'>
				<ul className='headernav-links no-margin'>
					<li><a href='./index.html' className='headernav-link'>Home</a></li>
					<li><a href='./analysis.html' className='headernav-link'>Analysis</a></li>
					<li><a href='./budgets.html' className='headernav-link'>Budgets</a></li>
					<li><a href='./settings.html' className='headernav-link active-link'>Settings</a></li>
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
// Testing
localStorage.setItem('loggedIn', JSON.stringify(true));
if(JSON.parse(localStorage.getItem('loggedIn')) === true ) {
	ReactDOM.render(<HeaderLoggedIn />, headerMount);
} else {
	ReactDOM.render(<HeaderNotLoggedIn />, headerMount)
}