var AppDispatcher = require('../dispatcher/dispatcher');
var ProfileConstants = require('../constants/profile_constants');
var SessionStore = require('./session_store');

var Store = require('flux/utils').Store;

var ProfileStore = new Store(AppDispatcher);

var _users = {};
var _pictures = [];

var resetUsers = function(users){
  _users = {};
  users.forEach(function(user){
    _users[user.id] = user;
  });
};

var resetUser = function(user){
  _users[user.id] = user;
};

var setUserPictures = function(user){
  user.pictures.forEach(function(picture){
    if (picture.user_id === SessionStore.currentUser().id){
      _pictures.push(picture);
    }
  });
};

ProfileStore.all = function() {
  return Object.assign({}, _users);
};

ProfileStore.findById = function (id) {
  return _users[id];
};

ProfileStore.getPictures = function(){
  return _pictures;
};

ProfileStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case ProfileConstants.RECEIVE_USER:
      resetUser(payload.user);
      setUserPictures(payload.user);
      this.__emitChange();
      break;
  }
};



module.exports = ProfileStore;
