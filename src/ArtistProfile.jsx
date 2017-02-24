import React, { Component } from 'react';
import './App.css';


class ArtistProfile extends Component {
  render(){
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}]};
    if(this.props.artist !== null){
      artist = this.props.artist;
    }
    return (
      <div>
        <img
          alt="Profile"
          className="profileImage"
          src={artist.images[0].url}
        />
        <div>{artist.name}</div>
        <div>Followers: {artist.followers.total}</div>
      </div>
    )
  }
}

export default ArtistProfile;
