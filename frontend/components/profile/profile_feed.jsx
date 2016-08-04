var React = require('react');
var PostStore = require('../../stores/post_store');
var ProfileStore = require('../../stores/profile_store');

var ProfileFeed = React.createClass({

  getInititalState: function(){
    return { post: {}};
  },

  onChange: function(){
    this.setState({ post: PostStore.getById(this.props.post.id)});
  },

  render: function(){
    return (
      <div>

      </div>
    );
  }
});

module.exports = ProfileFeed;
