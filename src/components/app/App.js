import React, { Component } from 'react';
import './App.css';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../searchresults/SearchResults';
import Playlist from '../playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Elton John',
        //   album: 'Madman Across The Water',
        //   id: 1
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Tim McGraw',
        //   album: 'Love Story',
        //   id: 2
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Rockabye Baby!',
        //   album: 'Lullaby Renditions of Elton John',
        //   id: 3
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'The White Raven',
        //   album: 'Tiny Dancer',
        //   id: 4
        // },
        // {
        //   name: 'Tiny Dancer - Live Album Version',
        //   artist: 'Ben Folds',
        //   album: 'Ben Folds Live',
        //   id: 5
        // }
      ],

      playlistName: [
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Elton John',
        //   album: 'Madman Across The Water',
        //   id: 1
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Tim McGraw',
        //   album: 'Love Story',
        //   id: 2
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Rockabye Baby!',
        //   album: 'Lullaby Renditions of Elton John',
        //   id: 3
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'The White Raven',
        //   album: 'Tiny Dancer',
        //   id: 4
        // },
        // {
        //   name: 'Tiny Dancer - Live Album Version',
        //   artist: 'Ben Folds',
        //   album: 'Ben Folds Live',
        //   id: 5
        // }
      ],

      playlistTracks: [
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Tim McGraw',
        //   album: 'Love Story',
        //   id: 1
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Elton John',
        //   album: 'Madman Across The Water',
        //   id: 2
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'Rockabye Baby!',
        //   album: 'Lullaby Renditions of Elton John',
        //   id: 3
        // },
        // {
        //   name: 'Tiny Dancer',
        //   artist: 'The White Raven',
        //   album: 'Tiny Dancer',
        //   id: 4
        // },
        // {
        //   name: 'Tiny Dancer - Live Album Version',
        //   artist: 'Ben Folds',
        //   album: 'Ben Folds Live',
        //   id: 5
        // }
      ]
    };
  }

  addTrack = track => {
    const { playlistTracks } = this.state;

    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({
        playlistTracks: playlistTracks.push(track)
      });
    }
  };

  removeTrack = track => {
    const updatedPlaylist = this.state.playlistTracks.filter(
      savedTrack => savedTrack.id !== track.id
    );

    this.setState({
      playlistTracks: updatedPlaylist
    });
  };

  updatePlaylistName = name => {
    this.setState({
      playlistName: name
    });
  };

  savePlaylist = () => {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({ playlistName: 'New Playlist' });
    this.setState({ playlistTracks: [] });
  };

  search = term => {
    console.log(term);
    Spotify.search(term).then(tracks => {
      this.setState({ searchResults: tracks });
    });
  };

  render() {
    const { searchResults, playlistName, playlistTracks } = this.state;

    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults
              searchResults={searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
