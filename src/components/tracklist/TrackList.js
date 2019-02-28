import React, { Component } from 'react';
import './TrackList.css';
import Track from '../track/Track';

class TrackList extends Component {
  render() {
    const { tracks, onAdd } = this.props;
    return (
      <div className='TrackList'>
        {tracks.map(track => (
          <Track key={track.id} track={track} onAdd={onAdd} />
        ))}
      </div>
    )
  }
}

export default TrackList;
