import React, { Component } from 'react';
import TrackList from '../tracklist/TrackList';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    const { searchResults, onAdd } = this.props;
    return (
      <div className='SearchResults'>
        <h2>Results</h2>
        <TrackList tracks={searchResults} onAdd={onAdd} isRemoval='false'/>
      </div>
    );
  }
}

export default SearchResults;
