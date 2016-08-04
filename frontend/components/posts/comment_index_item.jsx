var React = require('react');


var CommentIndexItem = React.createClass({

  render: function(){
    return (
      <div className="comment-index-item">
        <div className="comment-user">{this.props.comment.user}</div>
        <div className="comment-body">{this.props.comment.body}</div>
      </div>
    );
  }

});

module.exports = CommentIndexItem;
