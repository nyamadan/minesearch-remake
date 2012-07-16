
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , routes = require('./routes')
  , game = require('./game')

var app = express();

app.configure(function(){
  var config = {
    application : {
      name : 'Minesearch remake'
    }
  , server : {
      port : process.env.PORT || 3000
    , host : '192.168.56.10'
  , }
  , websocket : {
      port : 3030
    , host : '192.168.56.10'
    }
  };

  app.set('port', config.server.port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

  //User configuration
  game = game(config);
  routes = routes(config);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/serverinfo', routes.serverinfo);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

//WebSocketを準備する
game.createWebSocketServer();

