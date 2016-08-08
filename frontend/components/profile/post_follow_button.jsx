var React = require('react');
var SessionStore = require('../../stores/session_store');
var ProfileActions = ('../../actions/profile_actions');
var ProfileStore = require('../../stores/profile_store');

var FollowButton = React.createClass({



  _toggleFollow: function(){

    var relationshipData = {
      follower_id: SessionStore.currentUser().id,
      followed_id: this.props.user.id
    };

    if (this.userIsFollowed()){
      ProfileActions.deleteFollow(relationshipData);
    } else {
      ProfileActions.createFollow(relationshipData);
    }
  },

  userIsFollowed: function() {
    return ProfileStore.userIsFollowed(this.props.user);
  },

  _buttonDisplay: function (){
  var buttonText;
  if (this.userIsFollowed()){
    buttonText = "unfollow";
  }else{
    buttonText = "follow";
  }
  if (this.props.user.id === SessionStore.currentUser().id) {
    return;
  } else {
    return (
      <input type="button"
             onClick={this._toggleFollow}
             value={buttonText}
             className="follow-button"/>
    );
  }
},

  render: function(){

    return (
      <div className="follow-button-container">
        {this._buttonDisplay()}
      </div>
    );
  }
});

//need to implement the actions utils for this to work.

module.exports = FollowButton;
