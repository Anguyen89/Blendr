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

var addPost = function(post){
  _posts[post.id] = post;
};

var setComment = function(comment){
  console.log("coming from " + comment);
    console.log(_posts);
  var post = _posts[comment.picture_id];
  post.comments.push(comment);
};

var setLike = function(like){
  console.log("coming from " + like);
    console.log(_posts);
  var post = _posts[like.picture_id];
  post.likes.push(like);
};


// var removeLike = function(like){
//   var post = PostStore.getById(like.picture_id);
//   var likeIdx = post.likes.indexOf(SessionStore.currentUser());
//   post.likes.splice(likeIdx, 1);
// };



var removeLike = function(like) {
  console.log(like.picture_id);
  console.log(_posts[like.picture_id]);
  console.log(_posts);
    console.log("coming from " + like.picture_id);
  var allLikes = _posts[like.picture_id].likes.slice();
  var idx;
  for (var i=0; i<allLikes.length ; i++) {
    if (allLikes[i].id === like.id) {
      idx = i;
      allLikes.splice(idx,1);
    }
    _posts[like.picture_id].likes = allLikes;
  }
};

PostStore.postIsLiked = function(post){
  var currentUser = SessionStore.currentUser();
  var isLiked = false;

  post.likes.forEach(function(like){
    if(like.user_id === currentUser.id){
      isLiked = true;
    }
  });
  return isLiked;

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
    case PostConstants.RECEIVE_POST:
      addPost(payload.post);
      this.__emitChange();
      break;
    case PostConstants.RECEIVE_COMMENT:
      setComment(payload.comment);
      this.__emitChange();
      break;
    case PostConstants.RECEIVE_LIKE:
      setLike(payload.like);
      this.__emitChange();
      break;
    case PostConstants.REMOVE_LIKE:
      removeLike(payload.like);
      this.__emitChange();
      break;
  }
};


module.exports = PostStore;
