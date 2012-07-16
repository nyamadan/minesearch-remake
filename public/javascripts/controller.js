define(function(){
  "use strict";

  var ns = {}; // namespace

  ns.Controller = function() {
    this.initialize.apply(this, arguments);
  };

  ns.Controller.prototype = {
    initialize: function(view) {
      this.isGaming = false;
    },

    start:function(view) {
      this.isGaming = true;
    }
  };

  return ns;
});

