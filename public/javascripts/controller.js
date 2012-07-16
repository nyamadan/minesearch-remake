define(function(){
  "use strict";

  var ns = {}; // namespace

  ns.Controller = function() {
    this.initialize.apply(this, arguments);

    this.children = [];
  };

  ns.Controller.prototype = {
    initialize: function() {
    },

    execute: function(deltaT) {
    }
  };

  return ns;
});

