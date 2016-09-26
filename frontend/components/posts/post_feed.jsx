var React = require('react');
var PostStore = require('../../stores/post_store');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');
var PostFeedItem = require('./post_feed_item');
var Login = require('../login_form');
var ProfileStore = require('../../stores/profile_store');

var PostFeed = React.createClass({

  getInitialState() {
    return { posts: []};
  },

  componentDidMount(){
    this.PostStoreListener = PostStore.addListener(this._onChange);
    this.ProfileStoreListener = ProfileStore.addListener(this._onChange);
    PostActions.fetchPosts();
  },

  componentWillUnmount(){
    this.PostStoreListener.remove();
    this.ProfileStoreListener.remove();
  },

  _onChange(){
    this.setState({posts: PostStore.getPosts(SessionStore.currentUser())})
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
                <PostFeedItem post={post} userId={post.user_id} key={post.id} />
              );
            })}
          </div>
          <div className="post-feed-footer">
            <ul className="footer-content">
              <li><a href="https://www.linkedin.com/in/albert-nguyen-52240933"><img src="https://image.freepik.com/free-icon/linkedin-logo_318-50643.png"></img></a></li>
              <li><a href="http://www.albertnguyencodes.com"><img src="http://res.cloudinary.com/dkieltxya/image/upload/v1473876653/headshot_lwnx22.jpg"></img></a></li>
              <li><a href="https://github.com/Anguyen89/Blendr"><img src="http://image.flaticon.com/icons/svg/23/23957.svg"></img></a></li>
            </ul>
          </div>
        </div>
      );
    } else{
      return (
        <div className="feed-login">
          <Login/>
        </div>
      );
    }
  }


});


module.exports = PostFeed;
