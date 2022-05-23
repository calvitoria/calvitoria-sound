import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footer">
          <img className="footerIcon" src="https://user-images.githubusercontent.com/95686401/169666509-7c7f2285-460d-4112-b2fd-c732f158d2b5.png" alt="this project was made using react, javascript, css" />
        </div>
        <div className="footerInfo">
          <img src="https://user-images.githubusercontent.com/95686401/169666510-4fa226f7-2ffa-4ab6-aa68-9d06cdd09acd.png" alt="this project was made using react, javascript, css" />
        </div>
      </footer>
    );
  }
}

export default Footer;
