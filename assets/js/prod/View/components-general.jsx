// General Components

// Buttons
window.Button = React.createClass({
	render: function() {
		let classes = 'btn ';
		classes += this.props.classList.join(' ');
		return (
			<button type='button' onClick={this.props.onClickHandler} className={classes}>{this.props.btnName}</button>
		)
	}
});