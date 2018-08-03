
window.onload=function(){
  // This file is required by the index.html file and will
  // be executed in the renderer process for that window.
  // All of the Node.js APIs are available in this process.

  const SerialPort = require('serialport')
  const createTable = require('data-table')




  // botonx.onClick(function(){
  //   console.log("Hace click")
  // })

  var port = new SerialPort('/dev/tty.usbmodem1421', {
    baudRate: 115200
  });

  port.on('error', function(err) {
    console.log('Error: ', err.message);
  })

  port.on('data', function(data) {
    console.log('Data: ' + data);
    document.getElementById('incomedata').textContent = data
  })
//botonx positivo
  var botonx = document.getElementById('boton_x').addEventListener('click', function(){
    console.log("Click")
    port.write('G91G1X1F10\n', function(err) {})
  }, true);
//botonx negativo
  var botonx2 = document.getElementById('boton_x2').addEventListener('click', function(){
    console.log("Click")
    port.write('G91G1X-1F10\n', function(err) {})
  }, true);
//botonY positivo
  var botony = document.getElementById('boton_y').addEventListener('click', function(){
    console.log("Click")
    port.write('G91G1Y1F10\n', function(err) {})
  }, true);
//botonY negativo
  var botony2 = document.getElementById('boton_y2').addEventListener('click', function(){
    console.log("Click")
    port.write('G91G1Y-1F10\n', function(err) {})
  }, true);
//botonZ positivo
  var botonz = document.getElementById('boton_z').addEventListener('click', function(){
    console.log("Click")
    port.write('G91G1Z1F5\n', function(err) {})
    }, true);
//botonY negativo
    var botonz2 = document.getElementById('boton_z2').addEventListener('click', function(){
      console.log("Click")
      port.write('G91G1Z-1F5\n', function(err) {})
      }, true);
//Kill alarm botton
var botonreset = document.getElementById('boton_reset').addEventListener('click', function(){
  console.log("Click")
  port.write('$X\n', function(err) {})
}, true);
  var help = document.getElementById('help').addEventListener('click', function(){
    console.log("Click on help")
    port.write('$\n', function(err) {})
  }, true);
  //botonXY
    var botonxy = document.getElementById('boton_xy').addEventListener('click', function(){
      console.log("Click")
      port.write('G91G1X1F10Y1F10\n', function(err) {})
    }, true);
//botonY negativo
    var botonkill = document.getElementById('boton_kill').addEventListener('click', function(){
      console.log("Click")
      port.write('$H\n', function(err) {})
    }, true);


  // document.getElementById('boton_x').onClick = function(){
  //   console.log("XXX")
  // }

  // serialport.list((err, ports) => {
  //   console.log('ports', ports);
  //   if (err) {
  //     document.getElementById('error').textContent = err.message
  //     return
  //   } else {
  //     document.getElementById('error').textContent = ''
  //   }
  //
  //   if (ports.length === 0) {
  //     document.getElementById('error').textContent = 'No ports discovered'
  //   }
  //
  //   const headers = Object.keys(ports[0])
  //   const table = createTable(headers)
  //   tableHTML = ''
  //   table.on('data', data => tableHTML += data)
  //   table.on('end', () => document.getElementById('ports').innerHTML = tableHTML)
  //   ports.forEach(port => table.write(port))
  //   table.end();
  // })

}
