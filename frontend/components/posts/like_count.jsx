var React = require('react');



var LikeCount = React.createClass({

  likeCount: function(){
    if (this.props.post.likes < 1){
      return "0 likes";
    }else{
      return this.props.post.likes.length + " likes";
    }
  },

  render: function(){
    return (
      <div className="like-count">
        {this.likeCount()}
      </div>
    );
  }

});


module.exports = LikeCount;
