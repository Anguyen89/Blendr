
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

  receivePost: function(post){
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POST,
      post: post
    });
  },

  createPost: function(post) {
    PostUtil.createPost(post, this.receivePost);
  },




};


module.exports = PostActions;
