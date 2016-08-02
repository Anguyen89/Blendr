var React = require('react');
var hashHistory = require('react-router').hashHistory;

var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/session_actions');

module.exports = React.createClass({

  navRight: function(){
    if (SessionStore.currentUser()){
      return (
        <div className="nav-right">
          <img src="https://image.freepik.com/free-icon/user-male-silhouette_318-55563.png"></img>
          <img src="http://image.flaticon.com/icons/png/512/33/33308.png"></img>
          <img src="https://image.freepik.com/free-icon/standby--power-button_318-48023.jpg"></img>
        </div>
      );
    } else {
      return <div></div>;
    }
  },


  logout: function(){
    SessionActions.logOut();
  },

  render: function(){
    return (
      <div className="navbar">
        <div className="nav-left">
          <img className="logo" src="https://image.freepik.com/free-icon/instagram-logo_318-53344.png"></img>
        </div>
        {this.navRight()}
      </div>
    );
  }

});
