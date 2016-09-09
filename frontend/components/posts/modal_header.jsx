var React = require('react');

var ModalHeader = React.createClass({
  render: function(){
    return(
      <div className="modal-post-header">
        <div className="modal-pic-url">
          <img src={this.props.post.user}></img>
        </div>
        <div className="modal-profile-info">
          <div className="modal-profile-header-name">
            <div>{this.props.post.user_id}</div>
          </div>
          <div>@{this.props.post.user_id}</div>
        </div>
      </div>
    );
  }

});

module.exports = ModalHeader;
