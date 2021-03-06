
var PostUtil = require('../utils/post_util');
var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');

var PostActions = {

  fetchPosts: function(count){
    PostUtil.fetchPosts(count,this.receivePosts);
  },

  receivePosts: function(posts){
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POSTS,
      posts: posts
    });
  },
  fetchPost: function(postId) {
    PostUtil.fetchPost(postId, this.receivePost);
  },

  deletePost: function(postId) {
    PostUtil.deletePost(postId, this.removePost);
  },

  removePost: function(post){
    AppDispatcher.dispatch({
      actionType: PostConstants.DELETE_POST,
      post: post
    });
  },

  deleteComment: function(commentId) {
    PostUtil.removeComment(commentId, this.removeComment);
  },

  removeComment: function(comment){
    AppDispatcher.dispatch({
      actionType: PostConstants.DELETE_COMMENT,
      comment: comment
    });
  },


  receivePost: function(post){
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POST,
      post: post
    });
  },

  createPost: function(post) {
    PostUtil.createPost(post, this.receivePost);
  },

  createComment: function(comment){
    PostUtil.createComment(comment, this.receiveComment);
  },

  receiveComment: function(comment){
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_COMMENT,
      comment: comment
    });
  },

  createLike: function(like){
    PostUtil.createLike(like, this.receiveLike);
  },

  receiveLike: function(like){
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_LIKE,
      like: like
    });
  },

  removeLike: function(like){
    PostUtil.removeLike(like);
  },

  deleteLike: function(like){
    AppDispatcher.dispatch({
      actionType: PostConstants.REMOVE_LIKE,
      like: like
    });
  }



};


module.exports = PostActions;
