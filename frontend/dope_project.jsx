
"use strict";

//React
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
// Components
var App = require('./components/app');
var SignUp = require('./components/login_form');
var Login = require('./components/login_form');
var ProfileFeed = require('./components/profile/profile_feed');
//Auth
var SessionStore = require('./stores/session_store');
var SessionActions = require('./actions/session_actions');

 var PostFeed = require('./components/posts/post_feed');

 window.PostUtils = require('./utils/post_util.js');
 window.PostActions = require('./actions/post_actions');
 window.PostStore = require('./stores/post_store');

  window.ProfileActions = require('./actions/profile_actions');
  window.ProfileStore = require('./stores/profile_store');


 var appRouter = (
   <Router history={hashHistory}>
     <Route path="/" component={App}>
       <IndexRoute component={PostFeed}/>
       <Route path="signup" component={SignUp}/>
       <Route path="login" component={Login}/>
       <Route path="profile/:profileId" component={ProfileFeed} />
     </Route>
   </Router>

 );

document.addEventListener("DOMContentLoaded", function(){
  var root = document.getElementById("root");
  var register = document.getElementById('register');

  if (root){

    ReactDOM.render(appRouter, root);
  } else {
    ReactDOM.render(<SignUp/>, register);
  }

});
