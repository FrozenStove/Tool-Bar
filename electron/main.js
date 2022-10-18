// import {
//     app,
//     BrowserWindow,
//     ipcMain,
//     dialog,
// } from 'electron';
const { app, BrowserWindow, ipcMain, dialog, } = require('electron')
const shell = require('electron').shell;
const path = require('path')


const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        // show: false,
        // icon: path.resolve(__dirname, '../client/assets/logo_hat.ico'),
        webPreferences: {
            nodeIntegration: true,
            // contextIsolation: false,
            // devTools: isDev, //whether to enable DevTools
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // mainWindow.loadFile(path.join(__dirname, '../client/index.html'));
    mainWindow.loadFile(path.join(__dirname, '../dist/client/index.html'));
    console.log('Main Window loaded file index.html');

};

app.whenReady().then(() => {
    loadMainWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// NOTE: ipcMain's first argument is ALWAYS an event thing. Passed in arguments must be the 2nd one here.
ipcMain.handle('openFile', (event, args) => {
    shell.openPath(args);
})

