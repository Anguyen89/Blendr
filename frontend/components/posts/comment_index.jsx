var React = require('react');
var CommentIndexItem = require('./comment_index_item');

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
      <div className="comment-index-container">
        {comments}
      </div>
    );

  }

});

module.exports = CommentIndex;
