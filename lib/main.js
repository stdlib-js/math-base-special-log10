/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/e_log10.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/

'use strict';

// MODULES //

var getHighWord = require( '@stdlib/number-float64-base-get-high-word' );
var setHighWord = require( '@stdlib/number-float64-base-set-high-word' );
var setLowWord = require( '@stdlib/number-float64-base-set-low-word' );
var toWords = require( '@stdlib/number-float64-base-to-words' );
var ABS_MASK = require( '@stdlib/constants-float64-high-word-abs-mask' );
var HIGH_SIGNIFICAND_MASK = require( '@stdlib/constants-float64-high-word-significand-mask' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var BIAS = require( '@stdlib/constants-float64-exponent-bias' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var kernelLog1p = require( '@stdlib/math-base-special-kernel-log1p' );


// VARIABLES //

var TWO54 = 1.80143985094819840000e+16;     // 0x43500000, 0x00000000
var IVLN10HI = 4.34294481878168880939e-01;  // 0x3fdbcb7b, 0x15200000
var IVLN10LO = 2.50829467116452752298e-11;  // 0x3dbb9438, 0xca9aadd5
var LOG10_2HI = 3.01029995663611771306e-01; // 0x3FD34413, 0x509F6000
var LOG10_2LO = 3.69423907715893078616e-13; // 0x3D59FEF3, 0x11F12B36

// 0x7ff00000 = 2146435072 => 0 11111111111 00000000000000000000 => biased exponent: 2047 = 1023+1023 => 2^1023
var HIGH_MAX_NORMAL_EXP = 0x7ff00000|0; // asm type annotation

// 0x00100000 = 1048576 => 0 00000000001 00000000000000000000 => biased exponent: 1 = -1022+1023 => 2^-1022
var HIGH_MIN_NORMAL_EXP = 0x00100000|0; // asm type annotation

// 0x3ff00000 = 1072693248 => 0 01111111111 00000000000000000000 => biased exponent: 1023 = 0+1023 => 2^0 = 1
var HIGH_BIASED_EXP_0 = 0x3ff00000|0; // asm type annotation

// High/low words workspace:
var WORDS = [ 0|0, 0|0 ];


// MAIN //

/**
* Evaluates the common logarithm (base ten).
*
* @param {NonNegativeNumber} x - input value
* @returns {number} function value
*
* @example
* var v = log10( 4.0 );
* // returns ~0.602
*
* @example
* var v = log10( 8.0 );
* // returns ~0.903
*
* @example
* var v = log10( 0.0 );
* // returns -Infinity
*
* @example
* var v = log10( Infinity );
* // returns Infinity
*
* @example
* var v = log10( NaN );
* // returns NaN
*
* @example
* var v = log10( -4.0 );
* // returns NaN
*/
function log10( x ) {
	var valHi;
	var valLo;
	var hfsq;
	var hi;
	var lo;
	var hx;
	var lx;
	var y2;
	var f;
	var R;
	var w;
	var y;
	var i;
	var k;

	if ( isnan( x ) || x < 0.0 ) {
		return NaN;
	}
	toWords.assign( x, WORDS, 1, 0 );
	hx = WORDS[ 0 ] | 0; // asm type annotation
	lx = WORDS[ 1 ];
	k = 0|0; // asm type annotation

	if ( hx < HIGH_MIN_NORMAL_EXP ) {
		// Case: x < 2**-1022
		if ( ( ( hx & ABS_MASK ) | lx ) === 0 ) {
			return NINF;
		}
		k -= 54|0; // asm type annotation

		// Subnormal number, scale up x:
		x *= TWO54;
		hx = getHighWord( x ) | 0; // asm type annotation
	}
	if ( hx >= HIGH_MAX_NORMAL_EXP ) {
		return x + x;
	}
	// Case: log(1) = +0
	if ( hx === HIGH_BIASED_EXP_0 && lx === 0 ) {
		return 0.0;
	}
	k += ( ( hx >> 20 ) - BIAS )|0; // asm type annotation
	hx &= HIGH_SIGNIFICAND_MASK;
	i = ( ( hx + 0x95f64 ) & HIGH_MIN_NORMAL_EXP )|0; // asm type annotation

	// Normalize `x` or `x/2`...
	x = setHighWord( x, hx | ( i ^ HIGH_BIASED_EXP_0 ) );
	k += ( i >> 20 )|0; // asm type annotation
	y = k;
	f = x - 1.0;
	hfsq = 0.5 * f * f;
	R = kernelLog1p( f );

	/*
	* Notes:
	*
	* -   `f-hfsq` must (for args near `1`) be evaluated in extra precision to avoid a large cancellation when `x` is near `sqrt(2)` or `1/sqrt(2)`. This is fairly efficient since `f-hfsq` only depends on `f`, so can be evaluated in parallel with `R`. Not combining `hfsq` with `R` also keeps `R` small (though not as small as a true `lo` term would be), so that extra precision is not needed for terms involving `R`.
	* -   When implemented in C, compiler bugs involving extra precision used to break Dekker's theorem for spitting `f-hfsq` as `hi+lo`. These problems are now automatically avoided as a side effect of the optimization of combining the Dekker splitting step with the clear-low-bits step.
	* -   This implementation uses Dekker's theorem to normalize `y+val_hi`, so, when implemented in C, compiler bugs may reappear in some configurations.
	* -   The multi-precision calculations for the multiplications are routine.
	*/
	hi = f - hfsq;
	hi = setLowWord( hi, 0 );
	lo = ( f - hi ) - hfsq + R;
	valHi = hi * IVLN10HI;
	y2 = y * LOG10_2HI;
	valLo = ( y * LOG10_2LO ) + ( ( lo + hi ) * IVLN10LO ) + ( lo * IVLN10HI );

	/*
	* Note:
	*
	* -   Extra precision for adding `y*log10_2hi` is not strictly needed since there is no very large cancellation near `x = sqrt(2)` or `x = 1/sqrt(2)`, but we do it anyway since it costs little on CPUs with some parallelism and it reduces the error for many args.
	*/
	w = y2 + valHi;
	valLo += ( y2 - w ) + valHi;
	valHi = w;

	return valLo + valHi;
}


// EXPORTS //

module.exports = log10;
