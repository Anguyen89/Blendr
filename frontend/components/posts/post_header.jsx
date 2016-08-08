var React = require('react');
var UserProfilePic = require('../profile/user_profile_pic');
var UserProfileInfo = require('../profile/user_profile_info');

var PostHeader = React.createClass({

  render: function(){
    return(
      <div className="post-header">
        <div className="modal-pic-url">
          <img src={this.props.post.user}></img>
        </div>
        <div className="profile-info">
          <div className="profile-header-name">
            <h1>{this.props.post.user_id}</h1>
          </div>
          <h3>@{this.props.post.user_id}</h3>
        </div>
      </div>
    );
  }
});

module.exports = PostHeader;

//delete if unused
