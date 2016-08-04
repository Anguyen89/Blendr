var React = require('react');
var PostStore = require('../../stores/post_store');
var ProfileStore = require('../../stores/profile_store');
var ProfileActions = require('../../actions/profile_actions');
var SessionStore = require('../../stores/session_store');

var ProfileHeader = require('./profile_header');
var ProfilePictureIndex = require('./profile_picture_index');

var ProfileFeed = React.createClass({

  // getInititalState: function(){
  //   return { user: {}};
  // },
  //
  // onChange: function(){
  //   this.setState({ user: ProfileStore.findById(this.props.params.profileId)});
  // },

  getStateFromStore: function () {
    return {user: ProfileStore.findById(this.props.params.profileId)};
  },

  onChange: function () {
    this.setState(this.getStateFromStore() );
  },

  getInitialState: function () {
    return { user: {} };
  },

  componentWillReceiveProps: function(newProps){
    ProfileActions.fetchUser(newProps.params.profileId);
  },

  componentDidMount: function(){
    this.profileListener = ProfileStore.addListener(this.onChange);
    ProfileActions.fetchUser(this.props.params.profileId);
  },

  componentWillUnmount: function(){
    this.profileListener.remove();
  },

  render: function(){
    var userProfile;
    if (SessionStore.isUserLoggedIn() || Object.keys(this.state.user) !== 0){
      userProfile = (
      <div className="profile-feed">
        <ProfileHeader user={this.state.user}/>
        <ProfilePictureIndex user={this.state.user}/>
      </div>
      );
    }else {
      userProfile = (
        <div></div>
      );
    }
    return (
      <div>
        {userProfile}
      </div>
    );
  }
});

module.exports = ProfileFeed;
