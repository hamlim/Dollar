// Components.jsx

let HeaderLoggedIn = React.createClass({
	render: function() {
		return (
			<nav className='headernav center' role='navigation'>
				<ul className='headernav-links no-margin'>
					<li><a href='./index.html' className='headernav-link active-link'>Home</a></li>
					<li><a href='./records.html' className='headernav-link'>Records</a></li>
					<li><a href='./analysis.html' className='headernav-link'>Analysis</a></li>
					<li><a href='./budgets.html' className='headernav-link'>Budgets</a></li>
					<li><a href='./settings.html' className='headernav-link'>Settings</a></li>
				</ul>
			</nav>
		)
	}
});

let headerMount = document.getElementsByClassName('js-headerMount')[0];
if(state.loggedin) {
	ReactDOM.render(<HeaderLoggedIn />, headerMount);
} else {
	window.location.href = '/login.html';
}
// Home Components
let appMount = document.getElementsByClassName('js-appMount')[0];
// We have 1 core component to render

