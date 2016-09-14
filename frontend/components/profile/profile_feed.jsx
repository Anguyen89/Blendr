var React = require('react');
var PostStore = require('../../stores/post_store');
var ProfileStore = require('../../stores/profile_store');
var ProfileActions = require('../../actions/profile_actions');
var SessionStore = require('../../stores/session_store');
var Login = require('../login_form');
var HashHistory = require('react-router').hashHistory;

var ProfileHeader = require('./profile_header');
var ProfilePictureIndex = require('./profile_picture_index');

var ProfileFeed = React.createClass({

  getStateFromStore: function () {
    return {user: ProfileStore.findById(this.props.params.profileId)};
  },

  onChange: function () {
    this.setState(this.getStateFromStore() );
  },

  getInitialState: function () {
    return { user: {} };
  },

  componentWillMount: function(){
    ProfileActions.fetchUser(this.props.params.profileId);
  },

  componentWillReceiveProps: function(newProps){
    ProfileActions.fetchUser(newProps.params.profileId);
  },

  componentDidMount: function(){
    this.profileListener = ProfileStore.addListener(this.onChange);
  },

  componentWillUnmount: function(){
    // this.postListenter.remove();
    this.profileListener.remove();
  },

  render: function(){
    var userProfile;
        if (!SessionStore.isUserLoggedIn() || Object.keys(this.state.user).length === 0) {
           <div></div>
         } else {
           userProfile = (
             <div className="profile-feed">
               <ProfileHeader user={this.state.user} />
               <ProfilePictureIndex user={this.state.user} />
             </div>
           );
         }
    return (
      <footer>
        {userProfile}
      </footer>
    );
  }
});

module.exports = ProfileFeed;
