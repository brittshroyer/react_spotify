import React, { Component } from 'react';
import './App.css';
import ArtistProfile from './ArtistProfile';
import Gallery from './Gallery';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search(){
    const BASE_URL =  'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      const artist_id = artist.id;
      this.setState({
        artist: artist
      });

      FETCH_URL = 'https://api.spotify.com/v1/artists/' + artist_id + '/top-tracks?country=US&'
      fetch(FETCH_URL, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        const tracks = json.tracks;
        this.setState({
          tracks: tracks
        })
      })
    })
  }

  render(){
    return(
      <div className='App'>
        <div className='app-header'>
          Spotify React Yo!
        </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type='text'
              placeholder='Search for an Artist'
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <ArtistProfile
          artist={this.state.artist}
        />
        <Gallery
          tracks={this.state.tracks}
        />
      </div>

    )
  }
}
export default App;
