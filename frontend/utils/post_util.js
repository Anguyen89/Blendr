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

deletePost: function(postId, cb) {
  $.ajax({
    url: 'api/pictures/' + postId,
    type: "DELETE",
    success: cb
  });
},

createPost: function(post, cb) {
  console.log(post);
  $.ajax({
    url: "api/pictures",
    type: "POST",
    data: {picture: post},
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
},

createLike: function(like, cb){
  $.ajax({
    url: "api/likes",
    type: "POST",
    data: {like: like},
    success: cb
  });
},

removeComment: function(commentId, cb){
  $.ajax({
    url: 'api/comments/' + commentId,
    type: "DELETE",
    success: cb
  });
},


removeLike: function (like, cb) {
    $.ajax({
      url: "api/likes/" + like.id,
      type: "DELETE",
      success: cb
    });
  }

};


module.exports = PostUtils;
