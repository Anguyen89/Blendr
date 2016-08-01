var React = require('react');



var PostFeedItem = React.createClass({

  render: function(){
    return (
      <div className="post-container">

        <div className="user-info-container">
          <img className="user-photo" src={this.props.post.author.profile_image_url}></img>
          <h2 className="post-author">{this.props.post.author.username}</h2>
        </div>

        <div className="user-post-container">
          <div className="user-post-image" >{this.props.post.content_url}</div>
        </div>

      </div>
    );
  }

});


module.exports = PostFeedItem;
