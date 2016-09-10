var React = require('react');
var hashHistory = require('react-router').hashHistory;

var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/session_actions');
var Upload = require('./upload');

module.exports = React.createClass({

  navRight: function(){
    if (SessionStore.isUserLoggedIn()){
      return (
        <div className="nav-right">
          <img onClick={this.rootToProfile} src="https://image.freepik.com/free-icon/user-male-silhouette_318-55563.png"></img>
          <Upload/>
          <img onClick={this.logout} src="https://image.freepik.com/free-icon/standby--power-button_318-48023.jpg"></img>
        </div>
      );
    } else {
      return <div className="nav-right">
          <img onClick={this.rootToLogin} src="https://image.freepik.com/free-icon/standby--power-button_318-48023.jpg"></img>
      </div>;
    }
  },


  logout: function(){
    SessionActions.logOut();
  },

  rootToLogin: function(){
    hashHistory.push('/login');
  },

  rootToIndex: function(){
    hashHistory.push("/postfeed");
  },

  rootToProfile: function(){
    hashHistory.push("profile/" + SessionStore.currentUser().id);
  },

  render: function(){
    return (
      <div className="navbar">
        <div className="nav-left">
            <div onClick={this.rootToIndex} className="logo">blendr</div>
        </div>
        {this.navRight()}
      </div>
    );
  }

});
