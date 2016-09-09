var React = require('react');

var CommentIndex = require('./comment_index');
var CommentForm = require('./comment_form');
var CommentIndexHeader = require('./comment_index_header');


var CommentBox = React.createClass({


  render: function(){
    return(
    <div className="comment-box">
      <CommentIndexHeader post={this.props.post}/>
      <CommentIndex post={this.props.post}/>
      <CommentForm post={this.props.post}/>
    </div>
    );
  }
});

module.exports = CommentBox;
