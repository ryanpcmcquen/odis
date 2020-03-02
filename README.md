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

Odis is available via the [GitHack](https://raw.githack.com/) CDN (`v1.1.3`):
```html
<script
    src="https://rawcdn.githack.com/ryanpcmcquen/odis/1e4680c8a9bfa4c3b43e718b3a83446019162f9f/odis.min.js"
></script>
```
https://rawcdn.githack.com/ryanpcmcquen/odis/1e4680c8a9bfa4c3b43e718b3a83446019162f9f/odis.min.js

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
