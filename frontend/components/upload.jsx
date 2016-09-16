var React = require('react');
var PostActions = require('../actions/post_actions');



var Upload = React.createClass({
  upload: function(e){
    e.preventDefault();

    cloudinary.openUploadWidget(window.cloudinary_options,
    function (error, images) {
      if (error, images){
        var picture = { url: images[0].url, user_id: SessionStore.currentUser().id};
        PostActions.createPost(picture);
      }
    });
  },

  render: function(){
    return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Aiga_uparrow_inv.svg/500px-Aiga_uparrow_inv.svg.png" onClick={this.upload}></img>
    );
  }
});

module.exports = Upload;
