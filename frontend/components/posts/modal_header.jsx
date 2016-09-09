var React = require('react');
var ProfileStore = require('../../stores/profile_store');

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
            <div>{user.name}</div>
          </div>
          <div>@{user.username}</div>
        </div>
      </div>
    );
  }

});

module.exports = ModalHeader;
