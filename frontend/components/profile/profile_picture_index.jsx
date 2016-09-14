var React = require('react');
var ProfilePostPicture = require('./profile_post_picture');


var ProfilePictureIndex = React.createClass({

  render: function(){

  var posts =  this.props.user.pictures.map(function(picture){
      return (
        <ProfilePostPicture post={picture} key={picture.id}/>
      );
    });

    return(
      <div className="profile-post-index">
        <div className="profile-post-items">
          {posts}
        </div>
      </div>
    );
  }
});

module.exports = ProfilePictureIndex;
