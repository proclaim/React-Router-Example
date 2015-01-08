'use strict';
var React = require('react'),
	Router = require('react-router'),    
    RouteHandler = Router.RouteHandler;

var Inbox = React.createClass({	
	render: function() {
		return (
			/* jshint ignore: start */
			<div>this is inbox view
				<RouteHandler params={this.props.params}/>
			</div>
			/* jshint ignore: end */
		);
	}

});

module.exports = Inbox;