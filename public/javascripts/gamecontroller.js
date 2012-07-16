define([
       'boxmodel',
       'controller'
],
function(boxmodel, controller)
{
  "use strict";

  var ns = {}; // namespace

  ns.GameController = function() {
    this.initialize.apply(this, arguments);
  };

  ns.GameController.prototype = {
    initialize: function(gameView, websocketHost, websocketPort) {
      controller.Controller.prototype.initialize.apply(this, arguments);

      //メインビューを作成する
      this.gameView = gameView;

      //通信用ソケット
      var socket = io.connect('http://' + websocketHost + ':' + websocketPort);
      socket.on('connection', function (data) {
      });

      //描画用シーンを作成する
      this.scene = new Physijs.Scene;
      this.camera = new THREE.PerspectiveCamera(
        60,
        this.gameView.getAspect(),
        1, 1000
      );
      this.camera.position.set( 60, 50, 60 );
      this.camera.lookAt( this.scene.position );
      this.scene.add( this.camera );

      //箱をビューに登録する
      var boxModel = new boxmodel.BoxModel();
      this.addBoxModel(boxModel);
    },

    addBoxModel: function(boxModel) {
      this.scene.add(boxModel.mesh);
    },

    removeBoxModel: function(boxModel) {
      this.scene.remove(boxModel.mesh);
    },

    execute: function(deltaT) {
      controller.Controller.prototype.execute.apply(this, arguments);

      this.scene.simulate(undefined, 2); // run physics
      this.gameView.render(this.scene, this.camera);
    }
  };

  return ns;
});

