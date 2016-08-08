var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');
var SessionStore = require('./session_store');

var Store = require('flux/utils').Store;

var PostStore = new Store(AppDispatcher);




var _posts = {};

var resetPosts = function(posts){
  _posts = {};
  posts.forEach(function(post){
    _posts[post.id] = post;
  });
};

var setComment = function(comment){
  var post = _posts[comment.picture_id];
  post.comments.push(comment);
};


PostStore.all = function(){
  return Object.keys(_posts).map(function(key){
    return _posts[key];
  });
};

PostStore.getById = function(postId){
  return _posts[postId];
};



PostStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PostConstants.RECEIVE_POSTS:
      resetPosts(payload.posts);
      this.__emitChange();
      break;
    case PostConstants.RECEIVE_COMMENT:
      setComment(payload.comment);
      this.__emitChange();
      break;
  }
};


module.exports = PostStore;
