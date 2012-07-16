define([
       'boxmodel',
       'controller',
       'gameview'
],
function(boxmodel, controller, view)
{
  "use strict";

  var ns = {}; // namespace

  ns.GameController = function() {
    this.initialize.apply(this, arguments);
  };

  ns.GameController.prototype = {
    initialize: function(domContainer, width, height, websocketHost, websocketPort) {
      controller.Controller.prototype.initialize.apply(this, arguments);

      var socket = io.connect('http://' + websocketHost + ':' + websocketPort);
      socket.on('connection', function (data) {
      });

      //メインビューを作成する
      this.viewGame = new view.GameView(domContainer, width, height);

      //箱をビューに登録する
      var modelBox = new boxmodel.BoxModel();
      modelBox.addToGameView(this.viewGame);
    },

    execute: function(deltaT) {
      controller.Controller.prototype.execute.apply(this, arguments);

      this.viewGame.render();
    }
  };

  return ns;
});

