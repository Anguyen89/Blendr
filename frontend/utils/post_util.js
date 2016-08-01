var PostActions = require('../actions/post_actions');

var PostUtils = {

  fetchPosts: function(cb){
    $.ajax({
      method: "GET",
      url: "api/posts",
      success: cb
    });
  }
};


module.exports = PostUtils;
