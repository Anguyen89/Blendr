var React = require('react');
var HashHistory = require('react-router').hashHistory;
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');


var CommentIndexItem = React.createClass({

  rootToProfile: function(){
    HashHistory.push('/profile/' + this.props.comment.user_id);
  },

  deleteUserComment: function(){
    PostActions.deleteComment(this.props.comment.id);
  },

  render: function(){
    var deleteComment;
    if (this.props.comment.user_id === SessionStore.currentUser().id){
      deleteComment = (
        <div className="comment-index-delete" onClick={this.deleteUserComment}>x</div>
      );
    }else {
      deleteComment = (<div></div>);
    }
    return (
      <div className="comment-index-item">
        <div className="comment-index-info">
          <div onClick={this.rootToProfile} className="comment-index-item-name">{this.props.comment.user}</div>
          <div className="comment-index-item-body">{this.props.comment.body}</div>
        </div>
          <div className="comment-index-delete">
            {deleteComment}
          </div>
      </div>
    );
  }

});

module.exports = CommentIndexItem;
