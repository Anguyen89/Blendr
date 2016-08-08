
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
      type: "DELETE",
      data: {relationship: relationship},
      success: cb
    });
  }
};

module.exports = ProfileUtil;
