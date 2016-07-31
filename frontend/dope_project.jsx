
"use strict";

//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
// Components
var App = require('./components/app');
var LoginForm = require('./components/login_form');
//Auth
var SessionStore = require('./stores/session_store');
var SessionActions = require('./actions/session_actions');

 var PostFeed = require('./components/posts/post_feed');

var appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={ LoginForm } />
      <Route path="signup" component={LoginForm} />
      <Route path="dashboard" component={PostFeed} />
    </Route>
  </Router>

);

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(appRouter, document.getElementById('root'));
});
