import React, { Component } from 'react';
import './App.css';
import ArtistProfile from './ArtistProfile';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      query: '',
      artist: null
    }
  }

  search(){
    console.log('this.state', this.state);
    const BASE_URL =  'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log('json', json);
      const artist = json.artists.items[0];
      console.log('artist', artist);
      this.setState({artist: artist})
    });
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
        <div className='gallery'>
          Gallery Here
        </div>
      </div>

    )
  }
}
export default App;
