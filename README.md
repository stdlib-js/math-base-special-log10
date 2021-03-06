<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Common Logarithm

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [common logarithm][common-logarithm].

<section class="intro">

The [common logarithm][common-logarithm] (logarithm with base 10) is defined for any positive real number as

<!-- <equation class="equation" label="eq:common_logarithm" align="center" raw="\quad \log_{10} \left( x \right) = y \quad \text{such that} \quad 10^y = x" alt="Equation for the common logarithm."> -->

<div class="equation" align="center" data-raw-text="\quad \log_{10} \left( x \right) = y \quad \text{such that} \quad 10^y = x" data-equation="eq:common_logarithm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@8cb4d022f6163be6523964802725ed2a74f2497b/lib/node_modules/@stdlib/math/base/special/log10/docs/img/equation_common_logarithm.svg" alt="Equation for the common logarithm.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-log10
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var log10 = require( '@stdlib/math-base-special-log10' );
```

#### log10( x )

Evaluates the [common logarithm][common-logarithm].

```javascript
var v = log10( 100.0 );
// returns 2.0

v = log10( 8.0 );
// returns ~0.903

v = log10( 0.0 );
// returns -Infinity

v = log10( Infinity );
// returns Infinity

v = log10( NaN );
// returns NaN
```

For negative numbers, the [common logarithm][common-logarithm] is **not** defined.

```javascript
var v = log10( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var log10 = require( '@stdlib/math-base-special-log10' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'log10(%d) = %d', x, log10( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/exp10`][@stdlib/math/base/special/exp10]</span><span class="delimiter">: </span><span class="description">base 10 exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">natural logarithm.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log`][@stdlib/math/base/special/log]</span><span class="delimiter">: </span><span class="description">base `b` logarithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-log10.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-log10

[test-image]: https://github.com/stdlib-js/math-base-special-log10/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-log10/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-log10/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-log10?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-log10.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-log10/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-log10/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-log10/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-log10/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-log10/blob/main/branches.md

[common-logarithm]: https://en.wikipedia.org/wiki/Common_logarithm

<!-- <related-links> -->

[@stdlib/math/base/special/exp10]: https://github.com/stdlib-js/math-base-special-exp10

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln

[@stdlib/math/base/special/log]: https://github.com/stdlib-js/math-base-special-log

<!-- </related-links> -->

</section>

<!-- /.links -->
