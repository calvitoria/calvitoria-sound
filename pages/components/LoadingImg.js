import React from 'react';

class LoadingImg extends React.Component {
  render() {
    return (
      <div className="loadingContainer">
        <img
          className="loadingImg"
          alt="loading"
          src="https://media0.giphy.com/media/9JszoKX52Br3PViDsB/giphy.gif?cid=790b76113144282d4cc11d51fb88bb102ba84c67909e1ccd&rid=giphy.gif&ct=g"
        />
      </div>
    );
  }
}

export default LoadingImg;
