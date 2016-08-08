var React = require('react');
var PostStore = require('../../stores/post_store');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');


var LikeButton = React.createClass({

  getInitialState: function(){
    return { liked: ""};
  },

  _postIsLiked: function(){
    return PostStore.postIsLiked(this.props.post);
  },


  _toggleLike: function(e){

    e.preventDefault();

    var likeData = {
      user_id: SessionStore.currentUser().id,
      picture_id: this.props.post.id
    };

    if (this._postIsLiked()){
      PostActions.removeLike(likeData);
    }else{
      PostActions.createLike(likeData);
    }
    this.setState({ liked: PostStore.postIsLiked(this.props.post)});
  },
//
//   render: function() {
//   var className = this._isLiked() ? "fa fa-heart fa-2x filled-heart" :
//                                      "fa fa-heart-o fa-2x empty-heart";
//   return (
//     <div className="like-button">
//       <i onClick={this._toggleLike} className={className}></i>
//     </div>
//   );
// }

  render: function(){
    var buttonText = this._postIsLiked() ? "UnLike" : "Like";
    return (
      <div className="like_button-container">
        <button onClick={this._toggleLike} className="like-button">{buttonText}</button>
      </div>
    );
  }
});


module.exports = LikeButton;
