var React = require('react');
var ModalHeader = require('../posts/modal_header');
var CommentBox = require('../posts/comment_box');

var ModalPost = React.createClass({

  render: function(){
    return(
      <div className="modal-post-info">
        <ModalHeader post={this.props.post}/>
        <CommentBox post={this.props.post}/>
      </div>
    );
  }

});

module.exports = ModalPost;

//remove if unused
