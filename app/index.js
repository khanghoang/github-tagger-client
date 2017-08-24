import React, { Component } from 'react';
import ListRepo from './containers/ListTags';

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
        <div>Hello world 201</div>
        <ListRepo />
      </div>
    );
  }
}
