define(function() {
  "use strict";

  var ns = {}; // namespace

  ns.GameManager = function() {
    this.initialize.apply(this, arguments);
  };

  ns.GameManager.prototype = {
    initialize: function() {
      this.isGaming = false;
      this.controllerStack = [];
    },

    push: function(controller) {
      this.controllerStack.push(controller)
    },

    pop: function(controller) {
      this.controllerStack.pop(controller)
    },

    start: function() {
      var that = this;

      that.isGaming = true;

      var execute = function() {
        if (that.isGaming && that.controllerStack.length > 0) {
          var top = that.controllerStack.length - 1;
          that.controllerStack[top].execute();
          requestAnimationFrame(execute);
        }
      };

      requestAnimationFrame(execute);
    }
  };

  return ns;
});

