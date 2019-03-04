import React, { Component } from 'react';
import TrackList from '../tracklist/TrackList';
import './Playlist.css';

class Playlist extends Component {

  handleNameChange = (e) =>{
    this.props.onNameChange(e.target.value)
  }

  render() {
    const { onRemove, playlistTracks, onSave } = this.props;
    return (
      <div className='Playlist'>
        <input defaultValue='New Playlist' onChange={this.handleNameChange}/>
        <TrackList tracks={playlistTracks} onRemove={onRemove} />
        <a className='Playlist-save' onClick={onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
