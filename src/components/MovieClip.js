import YouTube from "react-youtube";
import React from "react";


 class MovieClip extends React.Component {
    render() {
      const options = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
      return <YouTube videoId="Etj6ccOdVr0" options={options} onReady={this._onReady} id="video"/>;
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

  export default MovieClip;