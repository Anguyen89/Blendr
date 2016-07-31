
var PostUtil = require('../utils/post_utils');
var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');

var PostActions = {

  fetchAllPost: function(){
    PostUtil.fetchPosts(this.receiveAllPosts);
  },

  receiveAllPosts: function(posts){
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_ALL_POSTS,
      posts: posts
    });
  }


};


module.exports = PostActions;
