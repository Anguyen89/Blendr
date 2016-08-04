var React = require('react');

var CommentIndex = require('./comment_index');


var CommentBox = React.createClass({
  render: function(){
    return(
    <div className="comment-box">
      <CommentIndex post={this.props.post}/>
    </div>
    );
  }
});

module.exports = CommentBox;
