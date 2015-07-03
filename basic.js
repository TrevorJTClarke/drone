var arDrone = require('ar-drone');
var http    = require('http');

// var video = arDrone.createClient().getVideoStream();
//
// video.on('data', console.log);
// video.on('error', console.log);

//var pngStream = arDrone.createClient().getPngStream();
var client = arDrone.createClient();
client.disableEmergency();
// client.config();
client.animateLeds('fire', 5, 2);
setTimeout(function(){
  client.animateLeds('standard', 5, 2);
},3000);
// client.on('navdata', function (data) {
//   console.log(data.demo);
//   console.log("client.config",data.config);
// });
//
// console.log('Connecting png stream ...');
// var pngStream = client.getPngStream();
//
// var lastPng;
// pngStream
//   .on('error', console.log)
//   .on('data', function(pngBuffer) {
//     lastPng = pngBuffer;
//   });
//
// var server = http.createServer(function(req, res) {
//   if (!lastPng) {
//     res.writeHead(503);
//     res.end('Did not receive any png data yet.');
//     return;
//   }
//
//   res.writeHead(200, {'Content-Type': 'image/png'});
//   res.end(lastPng);
// });

// server.listen(8080, function() {
  // console.log('Serving latest png on port 8080 ...');
  // client.takeoff();

  // client
  //   .after(5000, function() {
  //     this.clockwise(0.5);
  //   })
  //   .after(5000, function() {
  //     this.stop();
  //   })
  //   .after(5000, function() {
  //     this.clockwise(0.5);
  //   })
  //   .after(5000, function() {
  //     this.stop();
  //   })
  //   .after(5000, function() {
  //     this.clockwise(0.5);
  //   })
  //   .after(5000, function() {
  //     this.stop();
  //   })
  //   .after(5000, function() {
  //     this.clockwise(-0.5);
  //   })
  //   .after(5000, function() {
  //     this.stop();
  //   })
  //   .after(5000, function() {
  //     this.clockwise(-0.5);
  //   })
  //   .after(5000, function() {
  //     this.stop();
  //   })
  //   .after(5000, function() {
  //     this.clockwise(-0.5);
  //   })
  //   .after(5000, function() {
  //     this.stop();
  //   })
    // .after(1500, function() {
    //   this.stop();
    //   this.land();
    // });

// });
