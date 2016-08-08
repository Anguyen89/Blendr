var React = require('react');
var SessionStore = require('../../stores/session_store');
var ProfileActions = require('../../actions/profile_actions');
var ProfileStore = require('../../stores/profile_store');


var FollowButton = React.createClass({

  // getInitialState: function(){
  //   return { pushed: this.userIsFollowed()};
  // },

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
    //
    // this.setState({ pushed: this.userIsFollowed()});

  },

  userIsFollowed: function() {
    return ProfileStore.userIsFollowed(this.props.user);
  },

  _buttonDisplay: function (){
    // var buttonText;
    //
    // if (this.state.pushed === true){
    //   buttonText = "UnFollow";
    // }else{
    //   buttonText = "Follow";
    // }
  if (this.props.user.id === SessionStore.currentUser().id) {
    return;
  } else {
    return (
      <input
             id="follow-button-toggle"
             type='checkbox'
             onChange={this._toggleFollow}
             checked={this.userIsFollowed()}/>
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
