define(['view'], function(view){
  "use strict";
  var ns = {}; // namespace

  ns.GameView = function() {
    this.initialize.apply(this, arguments);
    this.children = [];
  };

  ns.GameView.prototype = {
    initialize: function(domGame, width, height) {
      //継承
      view.View.prototype.initialize.apply(this, arguments)

      width = width || 640;
      height = height || 640;

      this.renderer = null;

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize( width, height );
      this.renderer.setClearColorHex(0xC0C0C0, 1.0);
      domGame.appendChild( this.renderer.domElement );

    },

    render : function(scene, camera) {
      this.renderer.render(scene, camera); // render the scene
    }
  };

  return ns;
});

