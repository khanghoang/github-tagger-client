/* eslint-disable */
import React, { Component } from 'react';
import { getOr } from 'lodash/fp';

import List from '../components/List';
import SearchBar from '../components/searchBar';

class ListRepo extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      isLoggedIn: false,
      searchResults: [],
    };
  }
  componentDidMount() {
    fetch('https://github-tagger.herokuapp.com/')
      .then(res => res.json()) // parse repo
      .then(arrRepos => {
        console.log('arrRepos: ', arrRepos);
        if (arrRepos) {
          this.setState({ repos: arrRepos });
        }
        return arrRepos;
      })
      .catch(console.log.bind(console));
  }

  onClick = (e) => {
    // Prevent default anchor event
    e.preventDefault();
    // Set values for window
    const intWidth = '500';
    const intHeight = '400';
    const strResize = 'no';

    // Set title and open popup with focus on it
    const title = 'Login with github';
    const strParam = `width=${intWidth},height=${intHeight}',resizable='${strResize}'`;
    // window.open(GITHUB_LOGIN_URL, title, strParam).focus();
  }

  onResults = (results) => {
    this.setState({
      searchResults: results,
    });
  }

  render() {
    const loadingText = getOr(0, 'state.repos.length')(this)
      ? null
      : <div className="v-space-m">
          <b>Hang on, we are fetching repos...</b>
        </div>;

    const listRepos = getOr(0, 'state.searchResults.length')(this)
      ? <List repos={this.state.searchResults} />
      : <List repos={this.state.repos} />;

    const login = !this.state.isLoggedIn &&
      <b style={{ textDecoration: 'pointer' }} onClick={this.onClick}>
        Login with github
      </b>;

    const searchBar = getOr(0, 'state.repos.length')(this)
      ? <SearchBar repos={this.state.repos} onResults={this.onResults} />
      : null;

    return (
      <div>
        {login}
        {searchBar}
        {loadingText}
        {listRepos}
      </div>
    );
  }
}

export default ListRepo;
