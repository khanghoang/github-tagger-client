/* eslint-disable */
import React, { Component } from 'react';
import { getOr } from 'lodash/fp';
import { compose, lifecycle, branch, withState } from 'recompose';
import { connect } from 'react-redux';

import List from '../components/List';
import SearchBar from '../components/searchBar';
import { reposSelector } from './reducer';

const ListRepos = ({
  repos = [],
  searchResults = [],
  setSearchResults,
}) => {
  return (
    <div>
      <SearchBar repos={repos} onResults={setSearchResults} />
      {
        searchResults.length > 0
          ? <List repos={searchResults} />
          : <List repos={repos} />
      }
    </div>
  );
};

export default compose(
  connect(
    state => ({
      repos: reposSelector(state),
    }),
    null
  ),
  withState('searchResults', 'setSearchResults', [])
)(ListRepos);
