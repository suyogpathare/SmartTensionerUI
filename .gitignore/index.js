var electron = require('electron')
var app = electron.app
var {app, BrowserWindow} = electron

app.on('ready', function(){
   var mainWindow = new BrowserWindow({
     width : 700,
     height : 600
   })
   mainWindow.loadURL('file://'+ __dirname + '/test1.html')
})
