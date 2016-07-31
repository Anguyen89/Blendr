var React = require('react');
var hashHistory = require('react-router').hashHistory;

var SessionStore = require('../stores/session_store');
var SessionActions = require('../actions/session_actions');

module.exports = React.createClass({

  navRight: function(){
    if (SessionStore.currentUser()){
      return (
        <div className="nav-right">
          <img className="nav-icon" onClick={this.pushToDash} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462225052/home_n9c9qv.png"></img>
          <img className="nav-icon" onClick={this.pushToExplore} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462225052/compass_wwlply.png"></img>
          <img className="nav-icon" onClick={this.pushToProfile} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462225784/user_tqcx1r.png"></img>
          <img className="nav-icon" onClick={this.logout} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462224009/poweroff_wmvl7k.png"></img>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  pushToDash: function(){
    hashHistory.push('/dashboard');
  },

  logout: function(){
    SessionActions.logOut();
  },

  render: function(){
    return (
      <div className="navbar">
        <div className="nav-left">
          <img className="logo" src="https://secure.assets.tumblr.com/images/logo_page/img_logo_bluebg_2x.png"></img>
        </div>
        {this.navRight()}
      </div>
    );
  }

});
