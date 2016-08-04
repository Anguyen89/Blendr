var React = require('react');

var UserProfileInfo = React.createClass({

  render: function(){
    return (
      <div className="profile-info">
        <div className="profile-header-name">
          <h1>{this.props.user.name}</h1>
        </div>
        <h3>@{this.props.user.username}</h3>
      </div>
    );
  }
});

module.exports = UserProfileInfo;
