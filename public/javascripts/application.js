require(['gamecontroller'], function(controller){
  window.addEventListener('load', function(){
    'use strict';

    //Pyisijsの設定
    Physijs.scripts.worker = '/javascripts/physijs_worker.js';
    Physijs.scripts.ammo = '/javascripts/ammo.js';

    var domContainer = document.getElementById('gamecontainer');

    //コントローラーを作成して起動
    var gameController = new controller.GameController(domContainer, 640, 480);
    gameController.start();
  }, false);
});

