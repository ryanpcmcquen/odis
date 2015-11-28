# odis
Odis, the Latin god of modular limitation. :crystal_ball:

If you need `debounce` or `throttle`, Odis can help. Odis is the Latin god of modular limitation. As such, he is very helpful.

Odis' name comes from *modularis* (modular) and *modus* (limitation). :zap:

He also believes in being used internally in a project, just drop [these lines](https://github.com/ryanpcmcquen/odis/blob/master/odis.js#L8-L43) somewhere in your lib, the only downfall is that you won't have access to Odis' shortcuts, but you also won't be adding anything to the global object if you are properly wrapping your project. :tada:

Being a god also makes Odis a bit lazy, as such he set up *very small* shortcuts for accessing his functions. :watch:

`odis.debounce(func, delay)` may be expressed as `odis.debo()` or just `odis.d()`. Note that the delay argument is optional and the default debounce timeout is `210`.

`odis.throttle(func, delay)` may be expressed as `odis.thro()` or just `odis.t()`. Note that the delay argument is optional and the default throttle timeout is `42`.

I wrote about the origins of `odis` in [this blog post](https://ryanpcmcquen.org/javascript/2015/11/28/writing-my-own-throttle.html).

### CDN

Odis is available via RawGit CDN (`v0.1.1`):

    <script src="https://cdn.rawgit.com/ryanpcmcquen/odis/13fb9597958a283b967c1be652079585f3563489/odis.min.js"></script>

https://cdn.rawgit.com/ryanpcmcquen/odis/13fb9597958a283b967c1be652079585f3563489/odis.min.js

