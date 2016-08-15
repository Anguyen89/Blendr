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


  render() {
    return (
      <div>
        <header>
          <NavBar/>
        </header>
        <div className="app-splash-container">

        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
