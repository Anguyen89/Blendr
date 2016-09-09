var React = require('react');
var HashHistory = require('react-router').hashHistory;
var CommentBox = require('./comment_box');





var PostFeedItem = React.createClass({

  pushToProfile: function(e){
    e.preventDefault();
    HashHistory.push('/profile/' + this.props.userId);
  },

  render: function(){
    return (
      <div className="post-container">

        <div className="user-info-container">
          <div className="user-photo-name">
            <img className="user-photo" onClick={this.pushToProfile} src={this.props.post.user.profile_picture_url}></img>
            <h2 className="post-author" onClick={this.pushToProfile}>{this.props.post.user.username}</h2>
          </div>
        </div>

        <div className="user-image-container">
          <img className="user-post-image" src={this.props.post.url}></img>

        </div>

        <div className="post-comments-container">
          <CommentBox post={this.props.post}/>
        </div>

      </div>
    );
  }

});


module.exports = PostFeedItem;
