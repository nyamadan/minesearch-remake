define(['model'], function(model){
  "use strict";

  var ns = {}; // namespace

  ns.BoxModel = function() {
    this.initialize.apply(this, arguments);
  };

  ns.BoxModel.prototype = {
    initialize: function() {
      model.Model.prototype.initialize.apply(this, arguments);

      // Box
      this.mesh = new Physijs.BoxMesh(
        new THREE.CubeGeometry( 5, 5, 5 ),
        new THREE.MeshBasicMaterial({ color: 0x888888 })
      );
    },
  };

  return ns;
});

