var React = require('react');
var Modal = require('react-modal');
var PostStore = require('../../stores/post_store');
var PostActions = require('../../actions/post_actions');
var ModalPost = require('./modal_post');

var ProfilePostPicture = React.createClass({

  getInitialState: function () {
    return { modalOpen: false, post: {}};
  },

  onChange: function() {
    this.setState({post: PostStore.getById(this.props.post.id)});
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.onChange);
    PostActions.fetchPost(this.props.post.id);
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },

  _handleClick: function(){
    this.setState({modalOpen: true});
  },

  closeModal: function(){
    this.setState({modalOpen: false});
  },


  render: function() {
    return (
      <div className="profile-post-picture">
        <img onClick={this._handleClick} src={this.props.post.url} />

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyle}>

            <div className="modal-post-container">
              <img className="modal-picture" src={this.props.post.url} />
              <ModalPost post={this.state.post} />
            </div>

          </Modal>
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
