
var ProfileUtil = {
  fetchUser: function(id, cb){
    $.ajax({
      method: "GET",
      url: "users/" + id,
      success: cb
    });
  },

  createFollow: function(relationship, cb){

    $.ajax({
      url: "api/relationships",
      type: "POST",
      data: {relationship: relationship},
      success: cb
    });
  },

  deleteFollow: function(relationship, cb){
    $.ajax({
      url: "api/relationships/" + relationship.id,
      data: {relationship: relationship},
      type: "DELETE",
      success: cb
    });
  },

  updateProfile: function(picture, currentUser, cb){
    $.ajax({
      url: "users/" + currentUser.id,
      data: {user: picture},
      type: "PATCH",
      success: cb
    });
  }
};

module.exports = ProfileUtil;
