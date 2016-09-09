var React = require('react');
var ModalHeader = require('../posts/modal_header');
var ModalCommentBox = require('../profile/modal_comment_box');
var PostActions = require('../../actions/post_actions');
var PostStore = require('../../stores/post_store');
var ProfileStore = require('../../stores/profile_store');

var ModalPost = React.createClass({

  componentDidMount(){
    this.PostStoreListener = PostStore.addListener(this._onChange);
  },

  componentWillUnmount(){
    this.PostStoreListener.remove();
  },

  _onChange(){
    this.forceUpdate();
  },

  render(){
    return(
      <div className="modal-post-info">
        <ModalHeader post={this.props.post}/>
        <ModalCommentBox post={this.props.post}/>
      </div>
    );
  }

});

module.exports = ModalPost;
