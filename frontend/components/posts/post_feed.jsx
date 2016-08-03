var React = require('react');
var PostStore = require('../../stores/post_store');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');
var PostFeedItem = require('./post_feed_item');

var PostFeed = React.createClass({

  getInitialState() {
    return { posts: [], scrollCount: 1, time: Date.now()};
  },

  componentDidMount(){
    this.PostStoreListener = PostStore.addListener(this._onChange)
    this.scrollListener = window.addEventListener("scroll", this.addPosts);
    PostActions.fetchPosts();
  },

  componentWillUnmount(){
    this.PostStoreListener.remove();
     window.removeEventListener("scroll", this.addPosts);
  },
  addPosts: function() {
    if (window.innerHeight + window.scrollY + 1 >= document.body.offsetHeight
      && this.state.time + 1000 < Date.now() ) {
        $('.fa-spinner').show();

        this.state.scrollCount += 1;
        this.state.time = Date.now();
        PostActions.fetchPosts(this.state.scrollCount);
      }
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
