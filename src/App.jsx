import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      query: ''
    }
  }

  search(){
    console.log('this.state', this.state);
  }
  render(){
    return(
      <div className='App'>
        <div className='app-header'>
          Music Master!
        </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type='text'
              placeholder='Search for an Artist'
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className='artist-profile'>
          <div>Artist Picture Here</div>
          <div>Artist Name Here</div>
        </div>
        <div className='gallery'>
          Gallery Here
        </div>
      </div>

    )
  }
}
export default App;
