define(function(){
  "use strict";

  var ns = {}; // namespace

  ns.Model = function() {
    this.initialize.apply(this, arguments);
  };

  ns.Model.prototype = {
    initialize: function() {
    }
  };

  return ns;
});

