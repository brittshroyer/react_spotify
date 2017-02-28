import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {

  render(){
    console.log('gallery props', this.props);
    const { tracks } = this.props;
    return(
      <div>
        {tracks.map((track, k) => {
          const trackImg = track.album.images[0].url;
          return(
            <div
              key={k}
              className='album'
            >
              <img
                src={trackImg}
                className="track-img"
                alt="track"
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;
