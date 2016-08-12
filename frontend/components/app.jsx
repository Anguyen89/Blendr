"use strict";

var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/session_actions');
var NavBar = require('./navBar.jsx');
var HashHistory = require('react-router').hashHistory;

var App = React.createClass({

  // componentDidMount() {
  //   SessionStore.addListener(this.forceUpdate.bind(this));
  // },
  //
  // _handleLogOut(){
  //   SessionActions.logOut();
  // },
  //
  // pushToSignUp(){
  //   HashHistory.push('/signup');
  // },
  //
  // pushToLogin(){
  //   HashHistory.push('/login');
  // },


  greeting() {
  //
  // if (SessionStore.isUserLoggedIn()) {

      return (
        <hgroup className="header-group">
          <NavBar />
        </hgroup>
    );
    // }
    // else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
    //   return (
    //     <nav className="login-signup">
    //       <div className="landing">
    //         <button className="landing-button" onClick={this.pushToSignUp}>Get Started</button>
    //         <button className="landing-button" onClick={this.pushToLogin}>Log In</button>
    //       </div>
    //     </nav>
    //   );
    // }
  },

  render() {
    return (
      <div>
        <header>
          {this.greeting()}
        </header>
        <div className="app-splash-container">

        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
