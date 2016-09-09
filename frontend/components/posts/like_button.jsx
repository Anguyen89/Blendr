var React = require('react');
var PostStore = require('../../stores/post_store');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');



module.exports = React.createClass({

  handleLike: function(e){
    var data = {
      user_id: SessionStore.currentUser().id,
      picture_id: this.props.post.id
    };
    PostActions.createLike(data);
  },

  handleUnlike: function(e){
    var self = this;
    var post = this.props.post;
    var likeId;
    var currentUser = SessionStore.currentUser();

    post.likes.forEach(function(like) {
      if (like.user_id === currentUser.id) {
        likeId = like;
      }
    });

    PostActions.deleteLike(likeId);
  },

  render: function() {
    var self = this;
    var currentUser = SessionStore.currentUser();
    var post = this.props.post;

    var likeButton = <i id="unfilled" onClick={this.handleLike} className="fa fa-thumbs-o-up"></i>;

    post.likes.forEach(function(like) {
      if (like.user_id === currentUser.id) {
        likeButton = <i id="filled" onClick={self.handleUnlike} className="fa fa-thumbs-o-up"></i>;
      }
    });

    return <div className="like-container">{likeButton}</div>;
  }
});
