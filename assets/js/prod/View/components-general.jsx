// General Components

// Buttons
window.Button = React.createClass({

	render: function() {
		let classes = 'btn ';
		classes += this.props.classList.join(' ');
		return (
			<button type='button' onClick={this.props.onClickHandler} data-scope={this.props.dataScope} className={classes}>{this.props.btnName}</button>
		)
	}
});

window.Alert = React.createClass({
	render: function() {
		let classes = 'alert ';
		classes += this.props.classList.join(' ');
		return (
			<div className={classes} data-type={this.props.dataType} data-message={this.props.dataMessage}>
				{this.props.message}
			</div>
		)
	}
});