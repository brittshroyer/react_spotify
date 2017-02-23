import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div>
        <div className='app-header'>
          Music Master!
        </div>
        <div className='searchbar'>
          <input placeholder='search by artist'/>
          <button>Search</button>
          <div className='artist-profile'>
            <div>Artist Picture Here</div>
            <div>Artist Name Here</div>
          </div>
          <div className='gallery'>
            Gallery Here
          </div>
        </div>
      </div>
    )
  }
}
export default App;
