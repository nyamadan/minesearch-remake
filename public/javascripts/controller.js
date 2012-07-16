define(function(){
  "use strict";

  var ns = {}; // namespace

  ns.Controller = function() {
    this.initialize.apply(this, arguments);
  };

  ns.Controller.prototype = {
    initialize: function() {
    }
  };

  return ns;
});

