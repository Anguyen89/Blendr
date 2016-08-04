var React = require('react');
var ProfilePostPicture = require('./profile_post_picture');


var ProfilePictureIndex = React.createClass({

  render: function(){

  var posts =  this.props.user.pictures.map(function(picture){
      return (
        <ProfilePostPicture picture={picture} key={picture.id}/>
      );
    });

    return(
      <div className="profile-post-index">
        {posts}
      </div>
    );
  }
});

module.exports = ProfilePictureIndex;
