
var ProfileConstants = require('../constants/profile_constants');
var ProfileUtil = require('../utils/profile_util');
var AppDispatcher = require('../dispatcher/dispatcher');

var ProfileActions = {

  fetchUser: function(id){
    ProfileUtil.fetchUser(id, this.receiveUser);
  },

  receiveUser: function(user){
    AppDispatcher.dispatch({
      actionType: ProfileConstants.RECEIVE_USER,
      user: user
    });
  },

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
  }

};

module.exports = ProfileActions;
