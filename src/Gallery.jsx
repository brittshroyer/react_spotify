import React, { Component } from 'react';
import App from './App.css';

class Gallery extends Component {

  render(){
    let albumPics = {images: [{url: ''}]};
    if(this.props.albums !== []){
      albumPics = this.props.albums;
    }
    return(
      <div>
        <img
          alt="Album Cover"
          className="albumImage"
          src={albumPics[0].images[0].url}
        />
      </div>
    )
  }
}

export default Gallery;
