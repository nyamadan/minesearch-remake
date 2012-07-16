
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , game = require('./game')
  , http = require('http')

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));

  var config = {
    application : {
      name : 'Minesearch remake'
    }
  , websocket : {
      port : 3030
    , server : '192.168.56.10'
    }
  };

  game = game(config);
  routes = routes(config);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

game.createWebSocketServer();

