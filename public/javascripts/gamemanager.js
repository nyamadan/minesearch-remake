define(function() {
  "use strict";

  var ns = {}; // namespace

  ns.GameManager = function() {
    this.initialize.apply(this, arguments);
  };

  ns.GameManager.prototype = {
    initialize: function() {
      this.isGaming = false;
      this.lastFrameTime = null;
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
      that.lastFrameTime = (new Date()).getTime();

      var execute = function() {
        if (that.isGaming && that.controllerStack.length > 0) {
          var top = that.controllerStack.length - 1;
          var now = (new Date()).getTime();

          that.controllerStack[top].execute(now - that.lastFrameTime);

          that.lastFrameTime = now;

          requestAnimationFrame(execute);
        }
      };

      requestAnimationFrame(execute);
    }
  };

  return ns;
});

