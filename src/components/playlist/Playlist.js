import React, { Component } from 'react';
import TrackList from '../tracklist/TrackList';
import './Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <div className='Playlist'>
        <input value='New Playlist' />
        <TrackList />
        <a className='Playlist-save'>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
