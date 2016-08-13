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
		window.location.href = '/login.html';
	}
} else if(location === '/login.html') {
	ReactDOM.render(<HeaderNotLoggedInlogin />, headerMount);
} else {
	ReactDOM.render(<HeaderNotLoggedInsignup />, headerMount);
}


// Home Components
let appMount = document.getElementsByClassName('js-appMount')[0];
// We have 1 core component to render



// Login Components
let loginMount = document.getElementsByClassName('js-loginMount')[0];


let LoginForm = React.createClass({
	submitForm: function(e) {
		Copper.login({
			application_id: '57A90D32325E89E2CB0D44F28E3405DAE7E4E1D3',
			scope: 'name,email,phone',
		}).then(function(response) {
	          console.log('approved as:', response);
	          login(response);
	      })
	      .fail(function(err) {
	          console.log('err', err);
	      });
		e.preventDefault();
		console.log('Hello World!');
	},
	render: function() {
		return (
			<section className='signup tal-center'>
				<section className='loginheader'>
					<h4>Login to Dollar</h4>
				</section>
				<section className='loginform'>
					<form className=''>
						<Button onClickHandler={this.submitForm} classList={['btn-block', 'btn-large', 'btn-fill', 'btn-ghost']} btnName='Login' />
					</form>
				</section>
			</section>
		)
	}
});

if(location === '/login.html') {
	ReactDOM.render(<LoginForm />, loginMount);
}

// Signup Components
let signupMount = document.getElementsByClassName('js-signupMount')[0];

let SignupForm = React.createClass({
	submitForm: function(e) {
		Copper.login({
			application_id: '57A90D32325E89E2CB0D44F28E3405DAE7E4E1D3',
			scope: 'name,email,phone',
		}).then(function(response) {
	          console.log('approved as:', response);
	          //response.user is the userdata
	          signup(response);
	      })
	      .fail(function(err) {
	          console.log('err', err);
	          window.functions.renderAlert({
	          	msg: "Unable to signup! Try again below.",
	          	type: "danger"
	          });
	      });
		e.preventDefault();
	},
	render: function() {
		return (
			<section className='signup tal-center'>
				<section className='signupheader'>
					<h4>Signup for Dollar</h4>
				</section>
				<section className='signupform'>
					<form className=''>
						<Button onClickHandler={this.submitForm} classList={['btn-block', 'btn-large', 'btn-fill', 'btn-ghost']} btnName='Signup' />
					</form>
				</section>
			</section>
		)
	}
});

if(location === '/signup.html') {
	ReactDOM.render(<SignupForm />, signupMount);
}
