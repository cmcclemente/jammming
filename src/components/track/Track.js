import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  renderAction = () => {
    if (!this.props.isRemoval) {
      return (
        <a className='Track-action' onClick={this.removeTrack}>
          -
        </a>
      );
    } else {
      return (
        <a className='Track-action' onClick={this.addTrack}>
          +
        </a>
      );
    }
  };

  addTrack = () => {
    this.props.onAdd(this.props.track);
  };

  removeTrack = () => {
    this.props.onRemove(this.props.track);
  };

  render() {
    const { name, artist, album } = this.props.track;
    return (
      <div className='Track'>
        <div className='Track-information'>
          <h3>{name}</h3>
          <p>
            {artist} | {album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
