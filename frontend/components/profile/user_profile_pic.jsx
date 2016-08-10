var React = require('react');
var ProfileActions = require('../../actions/profile_actions');
var SessionStore = require('../../stores/session_store');

var UserProfilePic = React.createClass({
  //
  updatePic: function(e){
    e.preventDefault();
    if (this.props.user.id === SessionStore.currentUser().id){
      cloudinary.openUploadWidget(window.cloudinary_options,
      function (error, images) {
        if (error, images){
          var picture = { profile_picture_url: images[0].url};
          var currentUser = SessionStore.currentUser();
          ProfileActions.updatePic(picture, currentUser);
        }
      });
    }
  },


render: function(){
  return(
    <div className="user-profile-pic-container">
      <img onClick={this.updatePic} src={this.props.user.profile_picture_url}></img>
    </div>
  );
}

});

module.exports = UserProfilePic;
