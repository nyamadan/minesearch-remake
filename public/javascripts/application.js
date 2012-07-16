require(['gamemanager', 'gamecontroller'], function(manager, controller){
  window.addEventListener('load', function(){
    'use strict';

    //Pyisijsの設定
    Physijs.scripts.worker = '/javascripts/physijs_worker.js';
    Physijs.scripts.ammo = '/javascripts/ammo.js';

    var domContainer = document.getElementById('gamecontainer');

    //ゲームマネージャ起動
    var gameManager = new manager.GameManager();

    //コントローラーを作成して起動
    var gameController = new controller.GameController(domContainer, 640, 480, '192.168.56.10', 3030);

    gameManager.push(gameController);

    gameManager.start();

  }, false);
});

