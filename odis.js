/* odis v0.1.2 by ryanpcmcquen */
/*jslint browser:true, white:true*/
/*global window*/

(function() {
  'use strict';
  // we'll attach odis globally later
  var odis = {
    /* odis v0.1.2 by ryanpcmcquen */
    debounce: function(func, delay) {
      // set a reasonable timeout for debouncing
      // (42 * 5), more on that later
      delay = delay || 210;
      var funcTimeoutId;
      return function() {
        // keep clearing until it stops being called
        clearTimeout(funcTimeoutId);
        funcTimeoutId = setTimeout(function() {
          func.call();
        }, delay);
      };
    },
    throttle: function(func, delay) {
      // nod to Douglas Adams  ;^)
      delay = delay || 42;
      var waiting = false,
        funcTimeoutId;
      return function() {
        if (!waiting) {
          // very similar to debounce, but 'waiting'
          // allows execution while being called
          waiting = true;
          clearTimeout(funcTimeoutId);
          funcTimeoutId = setTimeout(function() {
            func.call();
            waiting = false;
          }, delay);
        }
      };
    }
  };
  // set up nice shortcuts because no one likes typing
  odis.thro = odis.throttle;
  odis.t = odis.thro;
  odis.debo = odis.debounce;
  odis.d = odis.debo;
  // attach odis globally
  window.odis = odis;
}());
