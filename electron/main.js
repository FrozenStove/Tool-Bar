// import {
//     app,
//     BrowserWindow,
//     ipcMain,
//     dialog,
// } from 'electron';
const { app, BrowserWindow, ipcMain, dialog, } = require('electron')
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

    mainWindow.loadFile(path.join(__dirname, '../client/index.html'));
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

// app.on('ready', async () => {
//     // if(isDev){
//     //   const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
//     //   const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];
//     //   installExtension(
//     //     extensions,
//     //     {loadExtensionOptions: {allowFileAccess: true}, forceDownload: forceDownload}
//     //   ).then((name:string) => {console.log(`Added Extension: ${name}`)})
//     //    .then(loadMainWindow)
//     //   //  .catch((err: Error) => {console.log('There was an Error: ', err)})
//     // }
//     // else loadMainWindow();
//     loadMainWindow();
// });

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// ipcMain.handle('getAllInfo', async () => {
//     // nodes

//     const tempData = {
//         name: 'deploy',
//         usage: 1,
//         resource: 'deploy',
//         request: 0.9,
//         limit: Math.random() + 1,
//         parent: 'deploy',
//         namespace: 'deploy',
//     };

//     try {
//         const nsSelect = await mainWindow.webContents
//             .executeJavaScript('({...localStorage});', true)
//             /* check what type this is with team */ /* check what type this is with team */
//             .then((localStorage) => {
//                 return localStorage.namespace;
//             });
//         const getNodes = await k8sApiCore.listNode(`${nsSelect}`);
//         const nodeData = getNodes.body.items.map(node => {
//             return parseNode(node);
//         }); // end of nodeData

//         const getPods = await k8sApiCore.listNamespacedPod(`${nsSelect}`);
//         // console.log('this is getPods: ',getPods.body.items[0]);

//         const memData = await Promise.all(
//             getPods.body.items.map(pod => {
//                 // console.log('this is all pods fom k8s', pod)
//                 return fetchMem(pod);
//             })
//         );
//         const cpuData = await Promise.all(
//             getPods.body.items.map(pod => fetchCPU(pod))
//         );

//         const filteredMem = memData;
//         // const filteredMem = memData.filter(el => el.request > 1)
//         const filteredCPU = cpuData.filter(el => el.resource === 'cpu');
//         const filteredPods = filteredMem;

//         for (let i = 0; i < filteredCPU.length; i++) {
//             filteredPods.push(filteredCPU[i]);
//         }

//         if (filteredPods) {
//             const newObj = {
//                 Nodes: nodeData,
//                 Pods: filteredPods,
//             };
//             return newObj;
//         }
//     } catch (error) {
//         return [tempData];
//     }
// });
