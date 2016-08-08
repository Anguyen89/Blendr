var React = require('react');
var SessionStore = require('../../stores/session_store');
var PostActions = require('../../actions/post_actions');

var CommentInput = React.createClass({

  getInitialState: function(){
    return {body: ""};
  },

  handleSubmit: function(e){
    e.preventDefault();

    var commentData = {
      user_id: SessionStore.currentUser().id,
      picture_id: this.props.post.id,
      body: this.state.body
    };

    PostActions.createComment(commentData);
    this.setState({body: ""});
  },

  handleBodyChange: function(e){
    this.setState({ body: e.target.value});
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            className="comment-input"
            placeholder="Add Comment"
            onChange={this.handleBodyChange}
            value={this.state.body} />
        </form>
      </div>
    );
  }

});

module.exports = CommentInput;
