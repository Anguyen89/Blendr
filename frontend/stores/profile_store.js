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
  }
};



module.exports = ProfileStore;
