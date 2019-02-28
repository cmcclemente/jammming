import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  renderAction = () => {
    let isRemoval = false;
    if (isRemoval) {
      return `-`;
    } else {
      return `+`;
    }
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
        <a className='Track-action'>{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
