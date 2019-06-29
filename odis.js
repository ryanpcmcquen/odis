// @license magnet:?xt=urn:btih:3877d6d54b3accd4bc32f8a48bf32ebc0901502a&dn=mpl-2.0.txt MPL-v2
/* odis v1.1.2 by ryanpcmcquen */
/*jslint browser:true*/
/*global module, window*/
(function () {
    "use strict";
    // We will attach odis globally later.
    var odis = {
        /* odis v1.1.2 by ryanpcmcquen */
        debounce: function (func, delay) {
            // Set a reasonable timeout for debouncing
            // (42 * 5), more on that later.
            delay = delay || 210;
            var funcTimeoutId;
            return function () {
                // Keep clearing until it stops being called.
                clearTimeout(funcTimeoutId);
                funcTimeoutId = setTimeout(function () {
                    func.call();
                }, delay);
            };
        },
        throttle: function (func, delay) {
            // Nod to Douglas Adams.  ;^)
            delay = delay || 42;
            var waiting = false;
            var funcTimeoutId;
            return function () {
                if (!waiting) {
                    // Very similar to debounce, but 'waiting'
                    // allows execution while being called.
                    waiting = true;
                    clearTimeout(funcTimeoutId);
                    funcTimeoutId = setTimeout(function () {
                        func.call();
                        waiting = false;
                    }, delay);
                }
            };
        }
    };
    // Set up nice shortcuts because no one likes typing.
    odis.thro = odis.throttle;
    odis.t = odis.thro;
    odis.debo = odis.debounce;
    odis.d = odis.debo;
    try {
        // Attach odis globally:
        window.odis = odis;
        module.exports = odis;
    } catch (ignore) {}
}());
// @license-end
