/* eslint-disable */
import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import electron from 'electron';
import fetch from 'node-fetch';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
  REACT_PERF,
} from 'electron-devtools-installer';
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

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 400,
    // titleBarStyle: 'hidden-inset',
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  await installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err))
  await installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err))
  await installExtension(REACT_PERF)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log('An error occurred: ', err))

});
