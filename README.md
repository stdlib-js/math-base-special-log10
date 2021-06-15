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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Evaluate the [common logarithm][common-logarithm].

<section class="intro">

The [common logarithm][common-logarithm] (logarithm with base 10) is defined for any positive real number as

<!-- <equation class="equation" label="eq:common_logarithm" align="center" raw="\quad \log_{10} \left( x \right) = y \quad \text{such\ that} \quad 10^y = x" alt="Equation for the common logarithm."> -->

<div class="equation" align="center" data-raw-text="\quad \log_{10} \left( x \right) = y \quad \text{such\ that} \quad 10^y = x" data-equation="eq:common_logarithm">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/log10/docs/img/equation_common_logarithm.svg" alt="Equation for the common logarithm.">
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


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-log10.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-log10

[test-image]: https://github.com/stdlib-js/math-base-special-log10/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-log10/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-log10/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-log10?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-log10
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-log10/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-log10/main/LICENSE

[common-logarithm]: https://en.wikipedia.org/wiki/Common_logarithm

</section>

<!-- /.links -->
