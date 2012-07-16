require(['gameview'], function(view){
  window.addEventListener('load', function(){
    var domContainer = document.getElementById('gamecontainer');

    var gameView = new view.GameView(domContainer, 640, 480);
    gameView.render();

  }, false);
});

