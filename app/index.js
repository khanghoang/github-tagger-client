import { Provider } from 'react-redux';
import React, { Component } from 'react';

import auth from 'electron-auth';

import { store } from './createStore';
import { storeGithubToken } from './sessionReducer';

// eslint-disable-next-line
export default class App extends Component {
  async componentDidMount() {
    const opt = {
      // client_id: 'a12166a8942e05cd1c4f',
      // client_secret: '20ba4d0d84fb9725b1d3f7ec324a1f53869fcfb5',
      client_id: 'aa957d0410e4f9cbdb8d',
      client_secret: '880dad95b2bb6481b4f2b18122e7ebebed3a1c96',
    };

    //Handle the github authentication
    auth(
      auth.providers.github,
      { ...opt, scope: 'user:email' },
      async (error, token) => {
        const rawData = await fetch(
          'https://github-tagger.herokuapp.com/login/github',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              token,
            }),
          }
        );
        const receivedToken = await rawData.json();
        store.dispatch(storeGithubToken(receivedToken.token));

        const repos = await fetch(
          'https://github-tagger.herokuapp.com/getRepo?tag=',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${receivedToken.token}`,
            },
          }
        ).then(res => res.json());
      }
    );
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
