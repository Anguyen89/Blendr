var React = require('react');
var LikeCount = require('./like_count');



var CommentIndexHeader = React.createClass({

  render: function(){
    return (
      <div className="comment-header-container">
        <h1>Comments</h1>
        <div className="comment-header-likes">
          <LikeCount post={this.props.post}/>
        </div>
      </div>
    );
  }

});

module.exports = CommentIndexHeader;
