"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var N=s(function(J,_){
function h(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}_.exports=h
});var q=s(function(U,l){
function M(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}l.exports=M
});var p=s(function(Y,g){
var S=require('@stdlib/number-float64-base-get-high-word/dist'),y=N(),E=q(),c=1048575,W=.3333333333333333;function d(r){var a,v,o,i,e,t,u,f,n,I,H;return i=S(r),e=r-1,(c&2+i)<3?e===0?0:e*e*(W*e-.5):(t=e/(2+e),u=t*t,i&=c,I=i-398458|0,n=u*u,H=440401-i|0,v=n*y(n),o=u*E(n),I|=H,f=o+v,I>0?(a=.5*e*e,t*(a+f)-a):t*(f-e))}g.exports=d
});var O=s(function(Z,L){
var A=require('@stdlib/number-float64-base-get-high-word/dist'),D=require('@stdlib/number-float64-base-set-high-word/dist'),P=require('@stdlib/number-float64-base-set-low-word/dist'),R=require('@stdlib/math-base-assert-is-nan/dist'),X=require('@stdlib/constants-float64-exponent-bias/dist'),k=require('@stdlib/constants-float64-ninf/dist'),F=p(),w=0x40000000000000,G=.4342944818781689,z=25082946711645275e-27,B=.30102999566361177,C=3694239077158931e-28,K=1048575,T=2146435072,V=1048576,b=1072693248;function j(r){var a,v,o,i,e,t,u,f;return R(r)||r<0?NaN:r===0?k:(v=A(r),t=0,v<V&&(t-=54,r*=w,v=A(r)),v>=T?r+r:(t+=(v>>20)-X|0,v&=K,e=v+614244&1048576|0,r=D(r,v|e^b),t+=e>>20|0,u=t,i=F(r),r-=1,a=P(r,0),o=r-a,f=u*C+(r+i)*z,f+=(o+i)*G+a*G,f+u*B))}L.exports=j
});var Q=O();module.exports=Q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
