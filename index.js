/* eslint-disable */
import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import electron from 'electron';
import auth from 'electron-auth';
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
    client_id: 'a12166a8942e05cd1c4f',
    client_secret: '20ba4d0d84fb9725b1d3f7ec324a1f53869fcfb5',
  };

  //Handle the github authentication
  auth(auth.providers.github, { ...opt, scope: 'user:email' }, function(error, token) {
    //Display the error
    console.log('Error: ');
    console.log(error);

    //Display the generated token
    console.log('Token: ');
    console.log(token);
  });
});
