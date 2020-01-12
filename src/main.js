const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');      
function createWindow () {   
  // Create the browser window.     
const win = new BrowserWindow({width: 800, height: 600}) 
// win.loadFile('index.html');
// win.loadURL('http://localhost:3000/');
// win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
win.loadURL(url.format({
  pathname: path.join(__dirname, '../build/index.html'),
  protocol: 'file:',
  slashes: true}));
}      
app.on('ready', createWindow)