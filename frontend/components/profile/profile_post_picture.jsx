var React = require('react');
var Modal = require('react-modal');
var PostStore = require('../../stores/post_store');
var PostActions = require('../../actions/post_actions');


var ProfilePostPicture = React.createClass({

  getInitialState: function () {
    return { pictures: [] };
  },

  onChange: function() {
    this.setState({post: PostStore.getById(this.props.picture.id)});
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.onChange);
    PostActions.fetchPost(this.props.picture.id);
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },



  render: function() {
    return (
      <div className="profile-post-picture">
        <img src={this.props.picture.url} />
      </div>
    );
  }
});

module.exports = ProfilePostPicture;
