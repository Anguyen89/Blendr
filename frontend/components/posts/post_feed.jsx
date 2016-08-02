var React = require('react');
var PostStore = require('../../stores/post_store');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');
var PostFeedItem = require('./post_feed_item');

var PostFeed = React.createClass({



  render: function(){
    var posts = this.state.posts;
    if (SessionStore.currentUser()){
      return (
        <div>
          <div className="feed">
            {this.props.children}
            {posts.map(function(post){
              return (
                <PostFeedItem post={post} key={post.id} className="feed-item"/>
              );
            })}
          </div>
        </div>
      );
    } else{
      return (
        <div>Loading...</div>
      );
    }
  }


});


module.exports = PostFeed;
