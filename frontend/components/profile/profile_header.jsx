var React = require('react');
var UserProfilePic = require('./user_profile_pic');
var UserProfileInfo = require('./user_profile_info');

var ProfileHeader = React.createClass({

  render: function(){
    return(
      <div className="profile-header">
        <UserProfilePic user={this.props.user}/>
        <UserProfileInfo user={this.props.user}/>
      </div>
    );
  }
});

module.exports = ProfileHeader;
