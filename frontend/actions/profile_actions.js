
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
  }

};

module.exports = ProfileActions;
