// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=n&&"symbol"==typeof Symbol.toStringTag?function(n){var e,a,i,f,u;if(null==n)return r.call(n);a=n[o],u=o,e=null!=(f=n)&&t.call(f,u);try{n[o]=void 0}catch(t){return r.call(n)}return i=r.call(n),e?n[o]=a:delete n[o],i}:function(n){return r.call(n)},a="function"==typeof Uint32Array;var i="function"==typeof Uint32Array?Uint32Array:null;var f,u="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var n,r,t;if("function"!=typeof i)return!1;try{r=new i(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(a&&t instanceof Uint32Array||"[object Uint32Array]"===e(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?u:function(){throw new Error("not implemented")};var y=f,c="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var v,p="function"==typeof Float64Array?Float64Array:void 0;v=function(){var n,r,t;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,NaN]),t=r,n=(c&&t instanceof Float64Array||"[object Float64Array]"===e(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?p:function(){throw new Error("not implemented")};var A=v,w="function"==typeof Uint8Array;var U="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,r,t;if("function"!=typeof U)return!1;try{r=new U(r=[1,3.14,-3.14,256,257]),t=r,n=(w&&t instanceof Uint8Array||"[object Uint8Array]"===e(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?m:function(){throw new Error("not implemented")};var d=b,h="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var F,N="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,r,t;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,65536,65537]),t=r,n=(h&&t instanceof Uint16Array||"[object Uint16Array]"===e(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?N:function(){throw new Error("not implemented")};var S,j={uint16:F,uint8:d};(S=new j.uint16(1))[0]=4660;var E=52===new j.uint8(S.buffer)[0],g=!0===E?1:0,I=new A(1),T=new y(I.buffer);function O(n){return I[0]=n,T[g]}var x=!0===E?1:0,G=new A(1),P=new y(G.buffer);var V=!0===E?0:1,Y=new A(1),_=new y(Y.buffer);var k=Number.NEGATIVE_INFINITY;function q(n){var r,t,o,e,a,i,f;return function(n){return n!=n}(n)||n<0?NaN:0===n?k:(a=0,(t=O(n))<1048576&&(a-=54,t=O(n*=0x40000000000000)),t>=2146435072?n+n:(a+=(t>>20)-1023|0,i=a+=(e=(t&=1048575)+614244&1048576|0)>>20|0,o=function(n){var r,t,o,e,a,i,f,u,y,c,l;return a=n-1,(1048575&2+(e=O(n)))<3?0===a?0:a*a*(.3333333333333333*a-.5):(c=(e&=1048575)-398458|0,l=440401-e|0,t=(y=(f=(i=a/(2+a))*i)*f)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(y),o=f*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(y),u=o+t,(c|=l)>0?i*((r=.5*a*a)+u)-r:i*(u-a))}(n=function(n,r){return G[0]=n,P[x]=r>>>0,G[0]}(n,t|1072693248^e)),r=function(n,r){return Y[0]=n,_[V]=r>>>0,Y[0]}(n-=1,0),f=3694239077158931e-28*i+25082946711645275e-27*(n+o),(f+=.4342944818781689*(n-r+o)+.4342944818781689*r)+.30102999566361177*i))}export{q as default};
//# sourceMappingURL=mod.js.map
