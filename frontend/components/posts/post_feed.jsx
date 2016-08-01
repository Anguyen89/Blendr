var React = require('react');
var PostStore = require('../../stores/post_store');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');

var PostFeed = React.createClass({

  getInitialState: function(){
    return { posts: []};
  },

  componentWillMount: function(){
    this.setState({posts: PostStore.all()});
  },

  componentWillUnMount: function(){
    this.postListener.remove();
  },

  componentDidMount: function(){
    PostActions.fetchAllPost();
    this.postListener = PostStore.addListener(this._onChange);
  },

  _onChange: function(){
    this.setState({ posts: PostStore.all()});
  },

  render: function(){
    var posts = this.state.posts;
    if (SessionStore.currentUser()){
      return (
        <div>
          <div className="feed">
            {this.props.children}
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
