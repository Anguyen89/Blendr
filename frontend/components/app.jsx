"use strict";

var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/session_actions');
var NavBar = require('./navBar.jsx');

var App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

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
    //       <Link to="/login" activeClassName="current">Login</Link>
    //       &nbsp;or&nbsp;
    //       <Link to="/signup" activeClassName="current">Sign up!</Link>
    //     </nav>
    //   );
    // }
  },

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"><h1>Dope Project</h1></Link>
          {this.greeting()}
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
