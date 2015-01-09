'use strict';
var React = require('react'),
	Router = require('react-router');    

var Message = React.createClass({
	mixins: [Router.State],
	render: function() {
		return (
			/* jshint ignore:start */
			<div>this is message with ID: <br/>
				{this.props.params.id} /* this does not require mixins */ <br/>
				or <br/>
				{this.getParams().id} /* this requires mixins */
			</div>
			/* jshint ignore:end */
		);
	}

});

module.exports = Message;