var React = require('react');
var CommentInput = require('./comment_input');


var CommentForm = React.createClass({

render: function(){
  return (
    <div>
      <CommentInput post={this.props.post}/>
    </div>
  );}
});

module.exports = CommentForm;
