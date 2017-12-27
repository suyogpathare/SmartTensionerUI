var serialport = require('serialport');
var portName = process.argv[2];


var myPort = new serialport("/dev/cu.usbmodem1411", {
    baudRate: 9600},
    {encoding: 'ascii'});

myPort.on('open', onOpen);
myPort.on('data', onData);

function onOpen(){
    console.log('Open connections!');
}

function onData(data){
    console.log('' + data);
    //var str = myPort.read();
    //console.log(str);
    div1 = document.getElementById('data');
    div1.textContent = data;
    div1.textContent += "kg"
}
