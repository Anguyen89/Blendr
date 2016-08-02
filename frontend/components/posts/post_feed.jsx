var React = require('react');
var PostStore = require('../../stores/post_store');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');
var PostFeedItem = require('./post_feed_item');

var PostFeed = React.createClass({

  getInitialState() {
    return { posts: []};
  },

  componentDidMount(){
    this.PostStoreListener = PostStore.addListener(this._onChange)
    PostActions.fetchAllPost();
  },

  componentWillUnmount(){
    this.PostStoreListener.remove();
  },

  _onChange(){
    this.setState({posts: PostStore.all()})
  },




  render: function(){
    var posts = this.state.posts;
    if (SessionStore.isUserLoggedIn()){
      return (
        <div>
          <div className="feed">
            {this.props.children}
            {posts.map(function(post){
              return (
                <PostFeedItem post={post} key={post.id} />
              );
            })}
          </div>
        </div>
      );
    } else{
      return (
        <div></div>
      );
    }
  }


});


module.exports = PostFeed;
