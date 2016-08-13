// General Components
window.functions = {
	renderAlert: function renderAlert(object){
		let alertMount = document.getElementsByClassName('js-alertMount')[0];
		if(object.type === "danger"){
			ReactDOM.render(<Alert classList={['alert-danger']} dataType="danger" dataMessage={object.msg} message={object.msg} />, alertMount);
		} else if (object.type === "warn") {
			ReactDOM.render(<Alert classList={['alert-warning']} dataType="warn" dataMessage={object.msg} message={object.msg} />, alertMount);
		} else {
			ReactDOM.render(<Alert classList={['alert-info']} dataType="info" dataMessage={object.msg} message={object.msg} />, alertMount);
		}
	}
};

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