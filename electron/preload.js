// import { ipcRenderer, contextBridge } from 'electron';

const { ipcRenderer, contextBridge } = require('electron')

// contextBridge allows for functions in main.ts to be available in the frontend

// Create window API with events at specific channels
/*
// Stretch goals: Accept namespace and pass in namespace to invoke method as 2nd arg

// exposes WINDOW_API methods to the frontend under "window.api" object
contextBridge.exposeInMainWorld('api', WINDOW_API);
*/

const WINDOW_API = {
  openFile: async (args) => ipcRenderer.invoke('openFile',args),
  // getNamespaces: async () => ipcRenderer.invoke('getNamespaces'),
  // getNodes: async () => ipcRenderer.invoke('getNodes'),
  // getDeployments: async () => ipcRenderer.invoke('getDeployments')
};

contextBridge.exposeInMainWorld('api', WINDOW_API);

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})