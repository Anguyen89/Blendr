var React = require('react');
var PostActions = require('../actions/post_actions');


var Upload = React.createClass({
  upload: function(e){
    e.preventDefault();

    cloudinary.openUploadWidget(window.cloudinary_options,
    function (error, images) {
      if (error, images){
        var picture = { url: images[0].url};
        PostActions.createPost(picture);
      }
    });
  },

  render: function(){
    return (
      <i onClick={this.upload} className="create-post-button">

      </i>
    );
  }
});

module.exports = Upload;
