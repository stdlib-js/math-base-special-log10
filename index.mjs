// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-significand-mask@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-log1p@v0.0.2-esm/index.mjs";var l=.4342944818781689,h=1048576,j=1072693248,f=[0,0];function p(p){var b,v,g,c,x,u,w,k,N,q,y,z,A,B;if(d(p)||p<0)return NaN;if(n.assign(p,f,1,0),w=f[1],B=0,(u=0|f[0])<h){if(0==(u&i|w))return o;B-=54,u=0|s(p*=0x40000000000000)}return u>=2146435072?p+p:u===j&&0===w?0:(B+=(u>>20)-m|0,z=B+=(A=(u&=r)+614244&h|0)>>20|0,g=.5*(N=(p=t(p,u|A^j))-1)*N,q=a(N),v=3694239077158931e-28*z+25082946711645275e-27*((x=N-(c=e(c=N-g,0))-g+q)+c)+x*l,(v+=(k=.30102999566361177*z)-(y=k+(b=c*l))+b)+(b=y))}export{p as default};
//# sourceMappingURL=index.mjs.map
