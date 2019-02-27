import React, { Component } from 'react';
import TrackList from '../tracklist/TrackList';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
    return (
      <div className='SearchResults'>
        <h2>Results</h2>
        <TrackList tracks={searchResults} />
      </div>
    );
  }
}

export default SearchResults;
