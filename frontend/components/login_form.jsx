"use strict";

var React = require('react');
var Link = require('react-router').Link;
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var ErrorStore = require('../stores/error_store');
var hashHistory = require('react-router').hashHistory;
//
// var LoginForm = React.createClass({
//
// 	contextTypes: {
// 		router: React.PropTypes.object.isRequired
// 	},
//
//   getInitialState() {
//     return {
//       username: "",
//       password: ""
//     };
//   },
//
//   componentDidMount() {
//     this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
//     this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
//   },
//
//   componentWillUnmount() {
//     this.errorListener.remove();
//     this.sessionListener.remove();
//   },
//
//   redirectIfLoggedIn() {
//     if (SessionStore.isUserLoggedIn()) {
//       this.context.router.push("/");
//     }
//   },
//
// 	handleSubmit(e) {
// 		e.preventDefault();
//
// 		const formData = {
// 			username: this.state.username,
// 			password: this.state.password
// 		};
//
//     if (this.props.location.pathname === "/login") {
//       SessionActions.logIn(formData);
//     } else {
//       SessionActions.signUp(formData);
//     }
// 	},
//
//   fieldErrors(field) {
//     const errors = ErrorStore.formErrors(this.formType());
//
//     if (!errors[field]) { return; }
//
//     const messages = errors[field].map( (errorMsg, i) => {
//       return <li key={ i }>{ errorMsg }</li>;
//     });
//
//     return <ul>{ messages }</ul>;
//   },
//
//   formType() {
//     return this.props.location.pathname.slice(1);
//   },
//
//   update(property) {
//     return (e) => this.setState({[property]: e.target.value});
//   },
//
// 	render() {
//
//     let navLink;
//     if (this.formType() === "login") {
//       navLink = <Link to="/signup">Sign Up</Link>;
//     } else {
//       navLink = <Link to="/login">Login</Link>;
//     }
//
// 		return (
//
// 			<div className="login-form-container">
// 				<form onSubmit={this.handleSubmit} className="login-form-box">
// 					<br/>
// 					{ this.formType() } or { navLink }
//
// 	        { this.fieldErrors("base") }
// 					<div className="login-form">
// 		        <br />
// 						<label> Username:
// 		          { this.fieldErrors("username") }
// 							<input type="text"
// 		            value={this.state.username}
// 		            onChange={this.update("username")}
// 								className="login-input" />
// 						</label>
//
// 		        <br />
// 						<label> Password:
// 		          { this.fieldErrors("password") }
// 		          <input type="password"
// 		            value={this.state.password}
// 		            onChange={this.update("password")}
// 								className="login-input" />
// 						</label>
//
// 		        <br />
// 						<input type="submit" value="Submit" />
// 					</div>
// 				</form>
//
// 			</div>
// 		);
// 	}
// });
//
// module.exports = LoginForm;

var LoginForm = React.createClass({


	getInitialState: function() {
		return {username: "", password: ""};
	},


	  componentWillUnmount() {
	    this.errorListener.remove();
	    this.sessionListener.remove();
	  },

	  redirectIfLoggedIn() {
	      hashHistory.push("/");
	  },

  handleLogin: function(e){
		// there will be no event for the guest login
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

	  formType() {
	    return this.props.location.pathname.slice(1);
	  },

	  fieldErrors(field) {
	    const errors = ErrorStore.formErrors(this.formType());

	    if (!errors[field]) { return; }

	    const messages = errors[field].map( (errorMsg, i) => {
	      return <li key={ i }>{ errorMsg }</li>;
	    });

	    return <ul>{ messages }</ul>;
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

    $('.login-logo, .login-message, .login-form').hide();
		$('.login-logo').fadeIn("slow");

		setTimeout(function() {
			$('.login-message').fadeIn("slow");
		}, 250);

		setTimeout(function() {
			$('.login-form').fadeIn("slow");
		}, 500);

		this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
		this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
	},

	render: function(){
		return (
			<div className="login-form-container">
				<header>
					<h1 className="login-logo">Instagr</h1>
					<p className="login-message">Share some Experiences</p>
				</header>
				{this.fieldErrors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
