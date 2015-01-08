'use strict';
var React = require('react'),
	Router = require('react-router');    

var Message = React.createClass({
	mixins: [Router.State],
	render: function() {
		return (
			/* jshint ignore:start */
			<div>this is message with ID:
				{this.props.params.id}
			</div>
			/* jshint ignore:end */
		);
	}

});

module.exports = Message;