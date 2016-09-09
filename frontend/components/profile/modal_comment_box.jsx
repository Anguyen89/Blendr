var React = require('react');

var CommentIndex = require('../posts/comment_index');
var CommentForm = require('../posts/comment_form');
var CommentIndexHeader = require('../posts/comment_index_header');

var ModalCommentBox = React.createClass({

  render: function(){
    return(
  <div className="modal-comment-box">
    <div>
      <CommentIndexHeader post={this.props.post}/>
      <CommentIndex post={this.props.post}/>
    </div>

    <div className="modal-comment-form">
      <CommentForm post={this.props.post}/>
    </div>
  </div>
    );
  }
});

module.exports = ModalCommentBox;
