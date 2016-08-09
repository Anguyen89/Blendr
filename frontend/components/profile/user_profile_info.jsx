var React = require('react');

var UserProfileInfo = React.createClass({

  render: function(){
    return (
      <div className="profile-info">

        <div className="profile-header-name">
          <h1>{this.props.user.name}</h1>
        </div>
        <div className="profile-header-username">
          <h3>@{this.props.user.username}</h3>
        </div>

        <div className="profile-header-stats">
          <h4>{this.props.user.followers.length} followers</h4>
          <h4>{this.props.user.following.length} following</h4>
          <h4>{this.props.user.pictures.length} posts</h4>
        </div>


      </div>
    );
  }
});

module.exports = UserProfileInfo;
