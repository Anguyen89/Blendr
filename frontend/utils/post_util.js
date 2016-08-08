var PostActions = require('../actions/post_actions');

var PostUtils = {

  fetchPosts: function(count, cb) {
  $.ajax({
    url: 'api/pictures',
    data: {count: count},
    success: cb
  });
},

fetchPost: function(postId, cb) {
  $.ajax({
    url: 'api/pictures/' + postId,
    success: cb
  });
},

createPost: function(post, cb) {
  $.ajax({
    url: "/api/pictures/",
    type: "POST",
    data: {post: post},
    success: cb
  });
},

createComment: function(comment, cb){
  $.ajax({
    url: "api/pictures/" + comment.picture_id + "/comments",
    type: "POST",
    data: {comment: comment},
    success: cb
  });
}

};


module.exports = PostUtils;
