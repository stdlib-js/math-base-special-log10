// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";function o(o){var d,m,a,l,j,f,h;return n(o)||o<0?NaN:0===o?i:(j=0,(m=t(o))<1048576&&(j-=54,m=t(o*=0x40000000000000)),m>=2146435072?o+o:(j+=(m>>20)-r|0,f=j+=(l=(m&=1048575)+614244&1048576|0)>>20|0,a=function(s){var e,n,r,i,o,d,m,a,l,j,f;return o=s-1,(1048575&2+(i=t(s)))<3?0===o?0:o*o*(.3333333333333333*o-.5):(j=(i&=1048575)-398458|0,f=440401-i|0,n=(l=(m=(d=o/(2+o))*d)*m)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(l),r=m*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(l),a=r+n,(j|=f)>0?d*((e=.5*o*o)+a)-e:d*(a-o))}(o=s(o,m|1072693248^l)),h=3694239077158931e-28*f+25082946711645275e-27*((o-=1)+a),(h+=.4342944818781689*(o-(d=e(o,0))+a)+.4342944818781689*d)+.30102999566361177*f))}export{o as default};
//# sourceMappingURL=index.mjs.map
