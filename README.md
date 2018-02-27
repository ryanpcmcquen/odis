# odis
Odis, the Latin god of modular limitation. :crystal_ball:

If you need `debounce` or `throttle`, Odis can help. Odis is the Latin god of
modular limitation. Odis is a very helpful god.

Odis' name comes from *modularis* (modular) and *modus* (limitation). :zap:

He also believes in being used internally in a project, just drop [these lines](https://github.com/ryanpcmcquen/odis/blob/master/odis.js#L8-L41) somewhere
in your lib, the only downfall is that you won't have access to Odis' shortcuts,
but you also won't be adding anything to the global object if you are properly
wrapping your project. :tada:

Like most gods, Odis hates typing. For this reason, he set up *very small*
shortcuts for accessing his functions. :watch:

`odis.debounce(func, delay)` may be expressed as `odis.debo()` or just `odis.d()`.
Note that the delay argument is optional. The default debounce timeout is `210`.

`odis.throttle(func, delay)` may be expressed as `odis.thro()` or just `odis.t()`.
Again, the delay argument is optional. The default throttle timeout is `42`.

I wrote about the origins of `odis` in [this blog post](https://ryanpcmcquen.org/javascript/2015/11/28/writing-my-own-throttle.html).

### CDN

Odis is available via RawGit CDN (`v1.1.1`):
```html
<script
    src="https://cdn.rawgit.com/ryanpcmcquen/odis/036dfa236cdf9cf5c812777e46ad875ba93860a0/odis.min.js"
></script>
```
https://cdn.rawgit.com/ryanpcmcquen/odis/036dfa236cdf9cf5c812777e46ad875ba93860a0/odis.min.js

### npm

Add it to your project to use it today:

```
npm install --save odis
```


### Usage

`odis.throttle` or `odis.debounce` should be used as a wrapper for the function you want
to limit, like so:

```js
document.querySelector('.foo').addEventListener(
    'click',
    odis.throttle(function () {
        console.log('Clicked.');
    },
    1000)
);
```
