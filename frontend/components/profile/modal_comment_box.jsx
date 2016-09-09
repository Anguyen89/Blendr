var React = require('react');

var CommentIndex = require('../posts/comment_index');
var CommentForm = require('../posts/comment_form');
var CommentIndexHeader = require('../posts/comment_index_header');
var PostStore = require('../../stores/post_store');
var ProfileStore = require('../../stores/profile_store');

var ModalCommentBox = React.createClass({

  // componentDidMount(){
  //   this.PostStoreListener = PostStore.addListener(this._onChange);
  //   this.ProfileStoreListener = ProfileStore.addListener(this._onChange);
  // },
  //
  // componentWillUnmount(){
  //   this.PostStoreListener.remove();
  //   this.ProfileStoreListener.remove();
  // },
  //
  // _onChange(){
  //   this.forceUpdate();
  // },

  render: function(){
    return(
  <div className="modal-comment-box">
    <div>
      <CommentIndexHeader post={this.props.post}/>
      <CommentIndex post={this.props.post}/>
    </div>

    <div className="modal-comment-form">
      <CommentForm post={this.props.post}/>
    </div>
  </div>
    );
  }
});

module.exports = ModalCommentBox;
