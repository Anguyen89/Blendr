
var ProfileUtil = {
  fetchUser: function(id, cb){
    $.ajax({
      method: "GET",
      url: "users/" + id,
      success: cb
    });
  }
};

module.exports = ProfileUtil;
