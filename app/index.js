import { Provider } from 'react-redux';
import React, { Component } from 'react';

import auth from 'electron-auth';

import { store } from './createStore';
import ListRepos from './containers/ListTags';
import AppBar from './appBar';

// eslint-disable-next-line
export default class App extends Component {
  async componentDidMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <div
          style={{
            userSelect: 'none',
          }}
        >
          <AppBar />
          <ListRepos />
        </div>
      </Provider>
    );
  }
}
