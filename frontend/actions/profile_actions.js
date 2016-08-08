
var ProfileConstants = require('../constants/profile_constants');
var ProfileUtil = require('../utils/profile_util');
var AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  createFollow: function(relationship){
    ProfileUtil.createFollow(relationship, this.receiveFollow);
  },

  deleteFollow: function(relationship){
    ProfileUtil.deleteFollow(relationship, this.removeFollow);
  },

  receiveFollow: function(relationship){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.FOLLOW_RECEIVED,
      relationship: relationship
    });
  },

  removeFollow: function(relationship){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.FOLLOW_REMOVED,
      relationship: relationship
    });
  },

  fetchUser: function(id){
    ProfileUtil.fetchUser(id, this.receiveUser);
  },

  receiveUser: function(user){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.RECEIVE_USER,
      user: user
    });
  },

  sayHello: function(){
    return console.log("hello");
  }

};
