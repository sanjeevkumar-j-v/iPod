import React from 'react';


class Video extends React.Component {

  render () {
    return (
        <div className="full-screen ">
            <video src={process.env.PUBLIC_URL + '/Videos/'+ 'Fast and Furious.mp4' } autoPlay />
        </div>
      );
  }
}

export default Video;
