var React = require('react');
var ProfileHeader = require('./profile_header');
var CommentBox = require('../posts/comment_box');

var ModalPost = React.createClass({

  render: function(){
    return(
      <div className="modal-post-container">
        <ProfileHeader user={this.props.post}/>
        <CommentBox post={this.props.post}/>
      </div>
    );
  }

});

module.exports = ModalPost;
