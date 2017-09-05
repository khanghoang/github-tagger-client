/* eslint-disable */
import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import electron from 'electron';
import auth from 'electron-auth';
import fetch from 'node-fetch';
/* eslint-enable */

enableLiveReload({ strategy: 'react-hmr' });

//Import app
// const mb = menubar({
//   index: `file://${__dirname}/index.html`,
// });
//
// mb.on('ready', function ready () {
//   console.log('app is ready')
// })

// eslint-disable-next-line immutable/no-let
let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 400,
    titleBarStyle: 'hidden-inset',
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  var opt = {
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
      console.log(
        'token: ',
        JSON.stringify({
          token,
        })
      );
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

      console.log('receivedToken: ', receivedToken);

      const repos = await fetch(
        'https://github-tagger.herokuapp.com/getRepo?tag=',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${receivedToken.token}`,
          },
        }
      ).then(res => res.json())

      console.log('token: ', repos);
    }
  );
});
