var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');
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


module.exports = ProfileStore;
