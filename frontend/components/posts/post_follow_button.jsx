var React = require('react');
var SessionStore = require('../../stores/session_store');


var FollowButton = React.createClass({

  toggleButton: function(){
    console.log("hello");
  },


  render: function(){
    var followButton;
    if (SessionStore.currentUser().id !== this.props.post.user_id){
        followButton = (<button onClick={this.toggleButton} className="follow-button">Follow</button>);
    }else{
      followButton = (<div></div>);
    }

    return (
      <div>{followButton}</div>
    );
  }
});

module.exports = FollowButton;
