var React = require('react');

var UserProfilePic = React.createClass({
  
render: function(){
  return(
    <div className="user-profile-pic-container">
      <img src={this.props.user.profile_picture_url}></img>
    </div>
  );
}

});

module.exports = UserProfilePic;
