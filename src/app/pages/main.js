'use strict';
var React = require('react'),
	Router = require('react-router'),
	Link = Router.Link,
	RouteHandler = Router.RouteHandler;

var Main = React.createClass({

	render: function() {
		return (
			/* jshint ignore: start */
			<div className="ui grid">
			
			<div className="one wide column"></div>
			<div className="fourteen wide column">
				<h3>Logo</h3>
					<div className="ui menu">
						<a className="item" href="#/home">
							<i className="home icon"></i>Home
						</a>
						<a className="item" href="#/inbox">
							<i className="inbox icon"></i>Inbox
						</a>		
					</div>

					<div class="ui grid">
						<div class=" centered row">
							
							<div class="twelve wide column">
								<RouteHandler params={this.props.params}/>
							</div>					
						</div>
					</div>
				</div>
			<div className="one wide column"></div>
			
			</div>
			/* jshint ignore: end */
		);
	}

});

module.exports = Main;