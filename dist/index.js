"use strict";var G=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=G(function(V,g){
var S=require('@stdlib/number-float64-base-get-high-word/dist'),M=require('@stdlib/number-float64-base-set-high-word/dist'),W=require('@stdlib/number-float64-base-set-low-word/dist'),h=require('@stdlib/number-float64-base-to-words/dist'),d=require('@stdlib/constants-float64-high-word-abs-mask/dist'),E=require('@stdlib/constants-float64-high-word-significand-mask/dist'),R=require('@stdlib/math-base-assert-is-nan/dist'),X=require('@stdlib/constants-float64-exponent-bias/dist'),c=require('@stdlib/constants-float64-ninf/dist'),p=require('@stdlib/math-base-special-kernel-log1p/dist'),B=0x40000000000000,N=.4342944818781689,D=25082946711645275e-27,P=.30102999566361177,k=3694239077158931e-28,w=2146435072,A=1048576,O=1072693248,n=[0,0];function y(r){var e,t,I,v,o,a,_,f,i,L,s,H,q,u;if(R(r)||r<0)return NaN;if(h.assign(r,n,1,0),a=n[0]|0,_=n[1],u=0,a<A){if((a&d|_)===0)return c;u-=54,r*=B,a=S(r)|0}return a>=w?r+r:a===O&&_===0?0:(u+=(a>>20)-X|0,a&=E,q=a+614244&A|0,r=M(r,a|q^O),u+=q>>20|0,H=u,i=r-1,I=.5*i*i,L=p(i),v=i-I,v=W(v,0),o=i-v-I+L,e=v*N,f=H*P,t=H*k+(o+v)*D+o*N,s=f+e,t+=f-s+e,e=s,t+e)}g.exports=y
});var F=l();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
