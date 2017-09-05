import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ListRepo from './containers/ListTags';
import { createReduxStore, store } from './createStore';

// const store = createReduxStore();

// eslint-disable-next-line
export default class App extends Component {
  render() {
    return (
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
    );
  }
}
