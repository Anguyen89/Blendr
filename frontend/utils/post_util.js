var PostActions = require('../actions/post_actions');

var PostUtils = {

  fetchPosts: function(cb){
    $.ajax({
      method: "GET",
      url: "api/pictures",
      success: cb
    });
  }
};


module.exports = PostUtils;
