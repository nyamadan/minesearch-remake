define(function(){
  "use strict";

  //Pyisijsの設定
  Physijs.scripts.worker = '/javascripts/physijs_worker.js';
  Physijs.scripts.ammo = '/javascripts/ammo.js';

  var ns = {}; // namespace

  ns.GameViwer = function() {
    this.initialize.apply(this, arguments);
  };

  ns.GameViwer.prototype = {
    initialize: function(domGame, width, height) {
      width = width || 640;
      height = height || 640;

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize( width, height );
      domGame.appendChild( this.renderer.domElement );

      this.scene = new Physijs.Scene;

      this.camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      this.camera.position.set( 60, 50, 60 );
      this.camera.lookAt( this.scene.position );
      this.scene.add( this.camera );

      // Box
      var box = new Physijs.BoxMesh(
        new THREE.CubeGeometry( 5, 5, 5 ),
        new THREE.MeshBasicMaterial({ color: 0x888888 })
      );
      this.scene.add( box );
    },

    renderer : null,
    camera : null,
    scene : null,

    render : function() {
      var that = this;

      this.scene.simulate(); // run physics
      this.renderer.render( this.scene, this.camera); // render the scene

      requestAnimationFrame(function(){ 
        that.render();
      });
    }
  };

  return ns;
});

