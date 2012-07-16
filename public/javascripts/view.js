define(function(){
  "use strict";

  var ns = {}; // namespace

  ns.View = function() {
    this.initialize.apply(this, arguments);
    this.children = [];
  };

  ns.View.prototype = {
    initialize: function() {
    },

    render : function() {
    }
  };

  return ns;
});

