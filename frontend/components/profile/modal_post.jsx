var React = require('react');
var ModalHeader = require('../posts/modal_header');
var ModalCommentBox = require('../profile/modal_comment_box');

var ModalPost = React.createClass({

  render: function(){
    return(
      <div className="modal-post-info">
        <ModalHeader post={this.props.post}/>
        <ModalCommentBox post={this.props.post}/>
      </div>
    );
  }

});

module.exports = ModalPost;
