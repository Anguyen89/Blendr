"use strict";

var React = require('react');
var Link = require('react-router').Link;
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var hashHistory = require('react-router').hashHistory;
var PostActions = require('../actions/post_actions');


var LoginForm = React.createClass({


	getInitialState: function() {
		return {username: "", password: ""};
	},


	redirectIfLoggedIn: function() {
	  hashHistory.push("/postfeed");
	},

  handleLogin: function(e){

		if (e) {e.preventDefault(); }

    SessionActions.logIn({
      username: this.state.username,
      password: this.state.password
    });
  },

  handleSignUp: function(e){
    e.preventDefault();
    SessionActions.signUp({
      username: this.state.username,
      password: this.state.password
    });
  },

  handleGuest: function(e){
    e.preventDefault();

		this.setState({username: "", password: ""});

		var username = "guest".split("");
		var password = "password".split("");
		var time = 50;

		var self = this;
		username.forEach(function(letter) {
			time += 100;
			setTimeout(function() {
				self.setState({username: self.state.username + letter});
			}, time);
		});

		time += 400;

		password.forEach(function(letter) {
			time += 100;
			setTimeout(function() {
				self.setState({password: self.state.password + letter});
			}, time);
		});

		time += 400;

		setTimeout(this.handleLogin, time);
  },

	handleUsernameChange: function (e) {
		this.setState({username: e.target.value});
	},

	handlePasswordChange: function (e) {
		this.setState({password: e.target.value});
	},

	form: function(){
		return(
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<section>
						<input
                placeholder="Username"
                onChange={this.handleUsernameChange}
								value={this.state.username}
								className="login-input"/>
            <br/>

						<input
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
							value={this.state.password}
							className="login-input"/>

					</section>

          <section>
            <button
              className="login-signup-button"
              onClick={this.handleLogin}>
              Sign In
            </button>

            <button
              className="login-signup-button"
              onClick={this.handleSignUp}>
              Sign Up
            </button>
					</section>

					<section>
            <button
              className="guest-button"
              onClick={this.handleGuest}>
              Log In As Guest
            </button>
          </section>

				</form>
			);
	},

	componentDidMount: function() {
		this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
		this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
	},

	render: function(){
		return (
			<div className="login-form-container">
				<header>
					<h1 className="login-logo">blendr</h1>
					<p className="login-message">Share some Experiences</p>
				</header>
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
