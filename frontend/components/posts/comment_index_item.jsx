var React = require('react');
var HashHistory = require('react-router').hashHistory;


var CommentIndexItem = React.createClass({

  rootToProfile: function(){
    HashHistory.push('/profile/' + this.props.comment.user_id);
  },

  render: function(){
    return (
      <div className="comment-index-item">
          <div onClick={this.rootToProfile} className="comment-index-item-name">{this.props.comment.user}</div>
          <div className="comment-index-item-body">{this.props.comment.body}</div>
      </div>
    );
  }

});

module.exports = CommentIndexItem;
