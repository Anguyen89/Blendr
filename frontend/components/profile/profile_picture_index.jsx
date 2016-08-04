var React = require('react');
var ProfilePostPicture = require('./profile_post_picture');


var ProfilePictureIndex = React.createClass({

  render: function(){
    // var posts = this.props.user.pictures.map(function(picture){
    //   return <ProfilePostPicture key={picture.id} picture={picture} />;
    // });
    return(
      <div className="profile-post-index">
        {this.props.user.pictures}
      </div>
    );
  }
});

module.exports = ProfilePictureIndex;
