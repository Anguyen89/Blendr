var React = require('react');
var CommentInput = require('./comment_input');
var LikeButton = require('./like_button');


var CommentForm = React.createClass({

render: function(){
  return (
    <div className="comment-form">
      <CommentInput post={this.props.post}/>
      <LikeButton post={this.props.post} />
    </div>
  );}
});

module.exports = CommentForm;
