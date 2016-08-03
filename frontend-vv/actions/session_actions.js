
"use strict";

var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');
var SessionApiUtil = require('../utils/session_api_util');
var ErrorActions = require('./error_actions');
var hashHistory = require('react-router').hashHistory;

var SessionActions = {

  signUp(formData){
    SessionApiUtil.signUp(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logIn(formData){
    SessionApiUtil.logIn(
      formData,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);

  },

  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser, complete);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/login");
  }

};

module.exports = SessionActions;
