# odis
Odis, the Latin god of modular limitation. :crystal_ball:

If you need `debounce` or `throttle`, Odis can help. Odis is the Latin god of modular limitation. As such, he is very helpful.

Since Odis' name comes from *modularis* (modular) and *modus* (limitation) he also believes in being used internally in a project, just drop [these lines](https://github.com/ryanpcmcquen/odis/blob/master/odis.js#L8-L43) somewhere in your lib.

Being a god also makes Odis a bit lazy, as such he set up very small shortcuts for accessing his functions.

`odis.debounce(func, delay)` may be expressed as `odis.debo()` or just `odis.d()`. Note that the delay argument is optional and the default debounce timeout is `210`.

`odis.throttle(func, delay)` may be expressed as `odis.thro()` or just `odis.t()`. Note that the delay argument is optional and the default throttle timeout is `42`.
