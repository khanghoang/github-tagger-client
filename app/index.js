import { Provider } from 'react-redux';
import React, { Component } from 'react';

import auth from 'electron-auth';

import { store } from './createStore';

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
          <div>Hello world 202</div>
        </div>
      </Provider>
    );
  }
}
