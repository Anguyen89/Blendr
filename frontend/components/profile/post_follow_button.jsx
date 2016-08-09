

var React = require('react');
var SessionStore = require('../../stores/session_store');
var ProfileActions = require('../../actions/profile_actions');
var ProfileStore = require('../../stores/profile_store');

// var FollowButton = React.createClass({
//
//   handleFollow: function(){
//     var followData = {
//       follower_id: SessionStore.currentUser().id,
//       followed_id: this.props.user.id
//     };
//
//     ProfileActions.createFollow(followData);
//   },
//
//   handleUnfollow: function(){
//     var user = this.props.user;
//     var currentUser = SessionStore.currentUser();
//     var userFollower;
//     var self = this;
//
//
//     user.followers.forEach(function(followedUser){
//       if (followedUser.id === currentUser.id){
//         userFollower = followedUser;
//       }
//     });
//
//     ProfileActions.deleteFollow(userFollower);
//   },
//
//   render: function(){
//     var self = this;
//     var user = this.props.user;
//     var currentUser = SessionStore.currentUser();
//        var followButton = <div className="follow-button" onClick={this.handleFollow}>Follow</div>;
//        if (SessionStore.currentUser()) {
//          user.followers.forEach(function(followed_user){
//            if (followed_user.id === currentUser.id) {
//              followButton = <div className="unfollow-button" onClick={self.handleUnfollow}>Followed</div>;
//              }
//            });
//
//            if (SessionStore.currentUser().id === self.props.user.id) {
//              followButton = <div/>;
//            }
//
//            return <div>{followButton}</div>;
//        } else {
//          return <div/>;
//        }
//      }
// });
//
//
//
// module.exports = FollowButton;


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
               onChange={this._toggleFollow}
               className="follow-button"/>
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
