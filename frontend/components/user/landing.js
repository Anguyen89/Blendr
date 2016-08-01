var React = require('react');
var HashHistory = require('react-router').hashHistory;
var SessionStore = require('../../stores/session_store');






var Landing = React.createClass({

  componentWillMount: function() {
    this.pushToDash();
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.pushToDash);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  pushToDash: function() {
    if (SessionStore.currentUser()) {
      HashHistory.push('/dashboard');
    }
  },

  pushToSignUp: function() {
    HashHistory.push('/signup');
  },

  pushToLogIn: function() {
    HashHistory.push('/login');
  },

  pushToPublicFeed: function() {
    HashHistory.push('/explore');
  },

  render: function() {

    return (
      <div className="landing">
        <button className="landing-button" onClick={this.pushToSignUp}>Get Started</button>
        <button className="landing-button" onClick={this.pushToLogIn}>Log In</button>
        <p onClick={this.pushToPublicFeed}>Here's what's trending now</p>
      </div>
    );
  }
});


module.exports = Landing;
