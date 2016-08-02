var React = require('react');
var HashHistory = require('react-router').hashHistory;
var SessionStore = require('../../stores/session_store');


var Landing = React.createClass({

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.pushToDash);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },


  pushToSignUp: function() {
    HashHistory.push('/signup');
  },

  pushToLogIn: function() {
    HashHistory.push('/login');
  },

  render: function() {

    return (
      <div className="landing">
        <button className="landing-button" onClick={this.pushToSignUp}>Get Started</button>
        <button className="landing-button" onClick={this.pushToLogIn}>Log In</button>
      </div>
    );
  }
});


module.exports = Landing;
