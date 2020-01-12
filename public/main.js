const { app, BrowserWindow } = require('electron');
const path = require('path')

let express = require('express');
let expressApp = express();
let router = express.Router();

expressApp.use(express.static(path.join(__dirname, '../build')));

let server = require('http').createServer(expressApp);
let io = require('socket.io')(server);

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

expressApp.use('/', router);

function createWindow() {
  // Create the browser window.     

  const win = new BrowserWindow({ width: 540, height: 550 })
  win.setPosition(0, 0, true)
  // win.setMenu(null)
  // win.loadFile('index.html');
  // win.loadURL('http://localhost:8080/')
  // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  // win.loadFile('build/index.html');

  let parsedSocket
  io.on('connection', (socket) => {
    console.log("Client connected.");
    parsedSocket = socket
    socket.on("show_app", (data) => {
      console.log(data);
      win.minimize()
      win.show()
    })
  })
  io.on('disconnect', (event) => {
    console.log("Client disconnected.")
  })

  resetIntervals = () => {
    console.log("Reset server called.")
    setInterval(() => {
      if (parsedSocket) {
        parsedSocket.emit('listen_interval')
      }
    }, 2700000)

    // intervel for reminder
    setInterval(() => {
      if (parsedSocket) {
        parsedSocket.emit('reminnder_timer')
      }
    }, 1000)

    // intervel for hydrated_timer
    setInterval(() => {
      if (parsedSocket) {
        parsedSocket.emit('hydrated_timer')
      }
    }, 3600000)
  }

  server.listen(3993, () => {

    let initialiseIntervals
    initialiseIntervals = setInterval(() => {
      if(parsedSocket){
        clearInterval(initialiseIntervals)
        resetIntervals();
      }
    }, 2000)




    console.log("app server runinig on 3993")
    win.loadURL('http://localhost:3993/') // at building time
    // win.loadURL('http://localhost:3000/')




  })
}
const appFolder = path.dirname(process.execPath)
const updateExe = path.resolve(appFolder, '..', 'Update.exe')
const exeName = path.basename(process.execPath)

app.setLoginItemSettings({
  openAtLogin: true,
  // path: updateExe,
  args: [
    '--processStart', `"${exeName}"`,
    '--process-start-args', `"--hidden"`
  ]
})
app.on('ready', createWindow);