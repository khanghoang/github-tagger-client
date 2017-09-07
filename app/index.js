import { Provider } from 'react-redux';
import React, { Component } from 'react';

import auth from 'electron-auth';

import { store } from './createStore';
import ListRepos from './containers/ListTags';

// eslint-disable-next-line
export default class App extends Component {
  async componentDidMount() {
  }
  render() {
    return (
      <Provider store={store}>
        <div
          style={{
            paddingTop: '30',
            paddingLeft: '10',
            paddingRight: '10',
            userSelect: 'none',
          }}
        >
          <ListRepos />
        </div>
      </Provider>
    );
  }
}
