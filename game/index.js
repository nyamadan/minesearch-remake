var socketio = require('socket.io');

module.exports = function(config) {
  var ns = {}


  ns.createWebSocketServer = function() {
      var io = socketio.listen(config.websocket.port);
      io.sockets.on('connection', function(socket) {
    });
  }
  return ns;
};

