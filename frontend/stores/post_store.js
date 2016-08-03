var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');

var Store = require('flux/utils').Store;

var PostStore = new Store(AppDispatcher);




var _posts = {};

var resetPosts = function(posts){
  _posts = {};
  posts.forEach(function(post){
    _posts[post.id] = post;
  });
};


PostStore.all = function(){
  return Object.keys(_posts).map(function(key){
    return _posts[key];
  });
};

PostStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PostConstants.RECEIVE_POSTS:
      resetPosts(payload.posts);
      this.__emitChange();
      break;
  }
};


module.exports = PostStore;
