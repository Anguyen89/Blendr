var React = require('react');
var ProfileStore = require('../../stores/profile_store');
var FollowButton = require('../profile/post_follow_button');
var hashHistory = require('react-router').hashHistory;


var ModalHeader = React.createClass({

  render(){
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

        <FollowButton user={user}/>

      </div>
    );
  }

});

module.exports = ModalHeader;
