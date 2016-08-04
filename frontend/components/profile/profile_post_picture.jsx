var React = require('react');
var Modal = require('react-modal');
var PostStore = require('../../stores/post_store');
var PostActions = require('../../actions/post_actions');


var ProfilePostPicture = React.createClass({

  getInitialState: function () {
    return { pictures: [] };
  },

  onChange: function() {
    this.setState({post: PostStore.getById(this.props.picture.id)});
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.onChange);
    PostActions.fetchPost(this.props.picture.id);
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },



  render: function() {
    return (
      <div className="profile-post-picture">
        <img src={this.props.picture.url} />
      </div>
    );
  }
});

module.exports = ProfilePostPicture;

var customStyle = {
  overlay : {
    position          : 'fixed',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.5)'
  },
  content : {
    position                   : 'static',
    display                    : 'flex',
    justifyContent             : 'space-around',
    alignItems                 : 'center',
    flexDirection              : 'row',
    border                     : 'none',
    background                 : 'none',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '0px',
    height                     : '600px',
    width                      : '935px',
    overflow                   : 'none'
  }
};
