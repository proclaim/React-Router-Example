/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Router = require('react-router'),

    Route = Router.Route,    
    NotFoundRoute = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,
    
    MainPage = require('./pages/main'),
    HomeView = require('./views/Home'),
    InboxView = require('./views/Inbox'),
    NotFound = require('./pages/404'),
    View1 = require('./widgets/Message'),
    
    Routes,
    App;


Routes = (
    /* jshint ignore:start */
    <Route path="/" handler={MainPage}>

        <Route name="home" handler={HomeView}>            
        </Route>
        <Route name="inbox" handler={InboxView}>
            <Route path=":id" handler={View1}/>
        </Route>
        <DefaultRoute handler={HomeView}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
    /* jshint ignore:end */
);

Router.run(Routes, function(Handler, state) {
    
    /*jshint ignore:start */
    React.render(<Handler params={state.params}/>, document.body);
    /*jshint ignore:end */
});