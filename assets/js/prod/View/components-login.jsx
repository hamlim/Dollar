let HeaderNotLoggedInlogin = React.createClass({
	render: function() {
		return (
			<nav className='headernav center tal-center' role='navigation'>
				<ul className='headernav-links'>
					<li><a href='./login.html' className='headernav-link active-link'>Login</a></li>
				</ul>
			</nav>
		)
	}
});

let headerMount = document.getElementsByClassName('js-headerMount')[0];
ReactDOM.render(<HeaderNotLoggedInlogin />, headerMount);

let loginMount = document.getElementsByClassName('js-loginMount')[0];

let LoginForm = React.createClass({
	submitForm: function(e) {
		Copper.login({
			application_id: '57A90D32325E89E2CB0D44F28E3405DAE7E4E1D3',
			scope: 'name,email,phone',
		}).then(function(response) {
	          console.log('approved as:', response);
	          //response.user is the userdata
	          login(response);
	      })
	      .fail(function(err) {
	          console.log('err', err);
	          window.functions.renderAlert({
	          	msg: "Unable to login! Try again below.",
	          	type: "danger"
	          });
	      });
		e.preventDefault();
	},
	render: function() {
		return (
			<section className='login tal-center'>
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

ReactDOM.render(<LoginForm />, loginMount);
