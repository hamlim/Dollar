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
					<li><a href='./index.html' className='headernav-link active-link'>Home</a></li>
					<li><a href='./records.html' className='headernav-link'>Records</a></li>
					<li><a href='./analysis.html' className='headernav-link'>Analysis</a></li>
					<li><a href='./budgets.html' className='headernav-link'>Budgets</a></li>
					<li><a href='./settings.html' className='headernav-link'>Settings</a></li>
					<li><a href='#' onClick={this.logoutUser} className='headernav-link'>Logout</a></li>
				</ul>
			</nav>
		)
	}
});
let HeaderNotLoggedInlogin = React.createClass({
	render: function() {
		return (
			<nav className='headernav center tal-center' role='navigation'>
				<ul className='headernav-links'>
					<li><a href='./login.html' className='headernav-link active-link'>Login</a></li>
					<li><a href='./signup.html' className='headernav-link'>Signup</a></li>
				</ul>
			</nav>
		)
	}
});
let HeaderNotLoggedInsignup = React.createClass({
	render: function() {
		return (
			<nav className='headernav center tal-center' role='navigation'>
				<ul className='headernav-links'>
					<li><a href='./login.html' className='headernav-link'>Login</a></li>
					<li><a href='./signup.html' className='headernav-link active-link'>Signup</a></li>
				</ul>
			</nav>
		)
	}
});

let headerMount = document.getElementsByClassName('js-headerMount')[0];
let location = window.location.pathname;
if(location === '/index.html') {
	if(localStorage.dollar) {
		if(state.loggedIn === true ) {
			ReactDOM.render(<HeaderLoggedIn />, headerMount);
		} else {
			window.location.href = '/login.html';
		}
	} else {
		window.location.href = '/signup.html';
	}
} else if(location === '/login.html') {
	if(localStorage.dollar){
		ReactDOM.render(<HeaderNotLoggedInlogin />, headerMount);
	} else {
		window.location.href = '/signup.html';
	}
} else {
	ReactDOM.render(<HeaderNotLoggedInsignup />, headerMount);
}


// Home Components
let appMount = document.getElementsByClassName('js-appMount')[0];
// We have 1 core component to render



// Login Components
let loginMount = document.getElementsByClassName('js-loginMount')[0];

// Signup Components
let signupMount = document.getElementsByClassName('js-signupMount')[0];

let SignupForm = React.createClass({
	submitForm: function(e) {
		e.preventDefault();
		console.log('Hello World!');
		// We want to send the data to our data handler and have that do the communication with the server
		let phoneElement = this.refs.phonenumber;
		let passElement = this.refs.password;
		if(phoneElement.value != '' && passElement.value != ''){
			let result = signup({
				'phonenumber': phoneElement.value,
				'password': passElement.value
			});
			if(result === true){
				window.location.href = '/index.html';
			} else {
				phoneElement.className += ' input-error';
				passElement.className += ' input-error';
			}
		} else {
			phoneElement.className += ' input-error';
			passElement.className += ' input-error';
		}
	},
	render: function() {
		return (
			<section className='signup tal-center'>
				<section className='signupheader'>
					<h4>Signup for Dollar</h4>
				</section>
				<section className='signupform'>
					<form className=''>
						<input className='signupform-input i-phonenumber' ref='phonenumber' type='tel' required placeholder='Phone Number'/>
						<input className='signupform-input i-password' ref='password' type='password' required placeholder='Password' />
						<Button onClickHandler={this.submitForm} classList={['btn-block', 'btn-large', 'btn-fill', 'btn-greenGhost']} btnName='Signup' />
					</form>
				</section>
			</section>
		)
	}
});

ReactDOM.render(<SignupForm />, signupMount);
