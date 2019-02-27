import React, { Component } from 'react'
import './App.css'
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../searchresults/SearchResults';
import Playlist from '../playlist/Playlist';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          searchResults: [
              {
                name: 'Tiny Dancer',
                artist: 'Elton John',
                album: 'Madman Across The Water',
                id: 1
              },
              {
                name: 'Tiny Dancer',
                artist: 'Tim McGraw',
                album: 'Love Story',
                id: 2
              },
              {
                name: 'Tiny Dancer',
                artist: 'Rockabye Baby!',
                album: 'Lullaby Renditions of Elton John',
                id: 3
              },
              {
                name: 'Tiny Dancer',
                artist: 'The White Raven',
                album: 'Tiny Dancer',
                id: 4
              },
              {
                name: 'Tiny Dancer - Live Album Version',
                artist: 'Ben Folds',
                album: 'Ben Folds Live',
                id: 5
              }
          ]
      }
  }  
  
    
  render() {
    const {searchResults} = this.state

    return (
        <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;