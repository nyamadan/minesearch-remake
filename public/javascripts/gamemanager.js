define(function() {
  "use strict";

  var ns = {}; // namespace

  ns.GameManager = function() {
    this.initialize.apply(this, arguments);
  };

  ns.GameManager.prototype = {
    initialize: function(controller) {
      this.isGaming = false;
      this.lastFrameTime = null;
      this.controllerStack = [];

      this.push(controller);

      this.isGaming = true;
      this.lastFrameTime = (new Date()).getTime();

      var that = this;
      var execute = function() {
        if (that.isGaming && that.controllerStack.length > 0) {
          var top = that.controllerStack.length - 1;
          var now = (new Date()).getTime();
          var deltaT = now - that.lastFrameTime;

          for(var i = top; i >= 0; --i){
            var controller = that.controllerStack[i];
            if (controller && typeof controller.execute === 'function') {
              if(controller.execute(deltaT) === false) {
                break;
              }
            }
          }

          that.lastFrameTime = now;

          requestAnimationFrame(execute);
        }
      };

      requestAnimationFrame(execute);
    },

    push: function(controller) {
      this.controllerStack.push(controller)
    },

    pop: function() {
      var controller = this.controllerStack.pop()
      if (controller && typeof controller.dispose === 'function') {
        controller.dispose();
      }
    }
  };

  return ns;
});

