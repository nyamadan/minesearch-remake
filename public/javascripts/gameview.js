define(['view'], function(view){
  "use strict";
  var ns = {}; // namespace

  ns.GameView = function() {
    this.initialize.apply(this, arguments);
  };

  ns.GameView.prototype = {
    initialize: function(domGame, width, height) {
      //継承
      view.View.prototype.initialize.apply(this, arguments)

      width = width || 640;
      height = height || 640;

      this.renderer = null;
      this.camera = null;
      this.scene = null;

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize( width, height );
      this.renderer.setClearColorHex(0xC0C0C0, 1.0);
      domGame.appendChild( this.renderer.domElement );

      this.scene = new Physijs.Scene;

      this.camera = new THREE.PerspectiveCamera(
        60,
        width / height,
        1, 1000
      );
      this.camera.position.set( 60, 50, 60 );
      this.camera.lookAt( this.scene.position );
      this.scene.add( this.camera );
    },

    render : function() {
      this.scene.simulate(); // run physics
      this.renderer.render( this.scene, this.camera); // render the scene
    }
  };

  return ns;
});

