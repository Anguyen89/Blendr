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
},

createLike: function(like, cb){
  $.ajax({
    url: "api/pictures/" + like.picture_id + "/likes",
    type: "POST",
    data: {like: like},
    success: cb
  });
},

removeLike: function(like, cb){
  $.ajax({
    url: "api/pictures/" + like.picture_id + "/likes/" + like.id,
    type: "DELETE",
    data: {like: like},
    success: cb
  });
}

};


module.exports = PostUtils;
