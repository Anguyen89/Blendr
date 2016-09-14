var React = require('react');
var ProfileStore = require('../../stores/profile_store');
var FollowButton = require('../profile/post_follow_button');
var hashHistory = require('react-router').hashHistory;
var PostActions = require('../../actions/post_actions');
var SessionStore = require('../../stores/session_store');


var ModalHeader = React.createClass({

  deletePost(){
    PostActions.deletePost(this.props.post.id);
  },

  render(){
    var deleteIcon;
    if (this.props.post.user_id == SessionStore.currentUser().id){
      deleteIcon = (
          <div onClick={this.deletePost}>x</div>
      )
    } else {
      deleteIcon = (
        <div></div>
      )
    }
    var user = ProfileStore.findById(this.props.post.user_id);
    return(
      <div className="modal-post-header">
        <div className="modal-pic-url">
          <img src={user.profile_picture_url}></img>
        </div>
        <div className="modal-profile-info">
          <div className="modal-profile-header-name">
            <div onClick={this.rootToProfile}>{user.name}</div>
          </div>
          <div className="modal-profile-handle">
            @{user.username}
          </div>
        </div>

        <FollowButton className="modal-follow-button" user={user}/>

          <div className="modal-post-delete">
            {deleteIcon}
          </div>

      </div>
    );
  }

});

module.exports = ModalHeader;
