/* eslint-disable */
import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
/* eslint-enable */

enableLiveReload({ strategy: 'react-hmr' });

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
});
