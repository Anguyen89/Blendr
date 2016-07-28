"use strict";

var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');


var SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserHasBeenFetched = false;

var _login = function(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
};

var _logout = function() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};



SessionStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
