"use strict";

var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/session_actions');
var NavBar = require('./navBar.jsx');
var HashHistory = require('react-router').hashHistory;
var Login = require('./login_form');

var App = React.createClass({


  render() {

    return (
      <div className="app-container">
        <header>
          <NavBar/>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
