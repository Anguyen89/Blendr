var AppDispatcher = require('../dispatcher/dispatcher');
var ProfileConstants = require('../constants/profile_constants');
var SessionStore = require('./session_store');

var Store = require('flux/utils').Store;

var ProfileStore = new Store(AppDispatcher);

var _users = {};

var resetUsers = function(users){
  _users = {};
  users.forEach(function(user){
    _users[user.id] = user;
  });
};

var resetUser = function(user){
  _users[user.id] = user;
};

var addFollower = function(relationship){
  var user = _users[relationship.followed_id];
  user.followers.push(SessionStore.currentUser());
  this.__emitChange();
};

var removeFollower = function(relationship) {
  var user = ProfileStore.findById(relationship.followed_id);
  var followerIdx = user.followers.indexOf(SessionStore.currentUser() );
  user.followers.splice(followerIdx, 1);
  this.__emitChange();
};

ProfileStore.userIsFollowed = function(user) {
  var currentUser = SessionStore.currentUser();
  var isFollowed = false;

  user.followers.forEach(function(follower) {
    if (follower.id === currentUser.id) {
      isFollowed = true;
    }
  });
  return isFollowed;
};


ProfileStore.all = function() {
  return Object.assign({}, _users);
};

ProfileStore.findById = function (id) {
  return _users[id];
};


ProfileStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case ProfileConstants.RECEIVE_USER:
      resetUser(payload.user);
      this.__emitChange();
      break;
    case ProfileConstants.RECEIVE_FOLLOW:
      addFollower(payload.relationship);
      break;
    case ProfileConstants.REMOVE_FOLLOW:
      removeFollower(payload.relationship);
      break;
  }
};



module.exports = ProfileStore;
