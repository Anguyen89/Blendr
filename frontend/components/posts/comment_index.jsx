var React = require('react');
var CommentIndexItem = require('./comment_index_item');
var LikeCount = require('./like_count');

var CommentIndex = React.createClass({

  render: function(){
    // var self = this;
    // var comments = this.props.post.comments.map(function(comment){
    //   return (
    //     <CommentIndexItem key={comment.id} post={self.props.post} comment={comment}/>
    //   );
    // });

    var self = this;
    var comments = this.props.post.comments.map(function(comment) {
  return (
    <CommentIndexItem
       key={comment.id}
       post={self.props.post}
       comment={comment} />
   );
});

    return (
      <div className="comment-index">
        <div className="comment-index-header">
          <h1>Comments</h1>
          <LikeCount post={this.props.post}/>
        </div>
        {comments}
      </div>
    );

  }

});

module.exports = CommentIndex;
