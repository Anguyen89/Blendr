var React = require('react');
// var BackgroundImageSource = require('../../util/backgroundImageSource');





var LandingContainer = React.createClass({
  // componentWillMount: function() {
  //   var imgUrl = BackgroundImageSource.returnImgSource();
  //
  //   this.divStyle = {
  //     backgroundImage: 'url(' + imgUrl + ')',
  //   };
  // },

  render: function() {

    return (
      <div className="landing-container">
        {this.props.children}
      </div>
    );
  }
});


module.exports = LandingContainer;
