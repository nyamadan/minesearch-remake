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

    //コントローラーを開始する
    start: function() {
      controller.Controller.prototype.start.apply(this, arguments);
      (function(that){
        var execute = function() {

          //メインビューをレンダリングする
          that.viewGame.render();

          if (that.isGaming) {
            requestAnimationFrame(execute);
          }
        };

        requestAnimationFrame(execute);
      })(this);
    }
  };

  return ns;
});

