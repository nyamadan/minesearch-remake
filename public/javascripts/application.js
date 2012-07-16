require(['view'], function(view){
  window.addEventListener('load', function(){
    var domContainer = document.getElementById('gamecontainer');

    var gameViewer = new view.GameViwer(domContainer, 640, 480);
    gameViewer.render();
  }, false);
});

