

var React = require('react');
var SessionStore = require('../../stores/session_store');
var ProfileActions = require('../../actions/profile_actions');
var ProfileStore = require('../../stores/profile_store');


var FollowButton = React.createClass({

  _toggleFollow: function() {
    var relationshipData = {
      follower_id: SessionStore.currentUser().id,
      followed_id: this.props.user.id
    };
    if (this.userIsFollowed()) {
      ProfileActions.deleteFollow(relationshipData);
    } else {
      ProfileActions.createFollow(relationshipData);
    }
  },

  userIsFollowed: function() {
    return ProfileStore.userIsFollowed(this.props.user);
  },

  _buttonDisplay: function (){
    if (this.props.user.id === SessionStore.currentUser().id) {
      //don't render anything if user is at their own page
      return;
    } else {
      return (
        <input type="checkbox"
               checked={this.userIsFollowed()}
               onChange={this._toggleFollow}/>
      );
    }
  },

  render: function() {
    return (
      <div className="follow-button-container">
        {this._buttonDisplay()}
      </div>
    );
  }

});


module.exports = FollowButton;
