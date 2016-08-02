var React = require('react');
var HashHistory = require('react-router').hashHistory;



var PostFeedItem = React.createClass({

  pushToProfile: function(){
    HashHistory.push('/blog');
  },

  render: function(){
    return (
      <div className="post-container">

        <div className="user-info-container">
          <img className="user-photo" onClick={this.pushToProfile} src={this.props.post.author.profile_image_url}></img>
          <h2 className="post-author">{this.props.post.author.username}</h2>
        </div>

        <div className="user-post-container">
          <img className="user-post-image" src={this.props.post.content_url}></img>
          <label className="image-description">{this.props.post.title}{this.props.post.body}</label>
        </div>

      </div>
    );
  }

});


module.exports = PostFeedItem;
