var React = require('react');
var HashHistory = require('react-router').hashHistory;
var CommentBox = require('./comment_index');
var SessionStore = require('../../stores/session_store');


var PostFeedItem = React.createClass({

  pushToProfile: function(e){
    e.preventDefault();
    HashHistory.push('/profile/' + this.props.userId);
  },

  render: function(){
    var followButton;
    if (SessionStore.currentUser().id !== this.props.post.user_id){
        followButton = (<button className="follow-button">Follow</button>);
    }else{
      followButton = (<div></div>);
    }
    return (
      <div className="post-container">

        <div className="user-info-container">
          <div className="user-photo-name">
            <img className="user-photo" onClick={this.pushToProfile} src={this.props.post.user.profile_picture_url}></img>
            <h2 className="post-author">{this.props.post.user.username}</h2>
          </div>

          <div className="post_follow_button-container">{followButton}</div>
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
