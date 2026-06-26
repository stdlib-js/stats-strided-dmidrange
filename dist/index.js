"use strict";var s=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=s(function(B,f){
var j=require('@stdlib/math-base-assert-is-positive-zero/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist'),R=require('@stdlib/math-base-assert-is-nan/dist');function Z(i,r,a,d){var t,n,u,e,v;if(i<=0)return NaN;if(i===1||a===0)return r[d];for(u=d,n=r[u],t=n,v=1;v<i;v++){if(u+=a,e=r[u],R(e))return e;e<n||e===n&&l(e)?n=e:(e>t||e===t&&j(e))&&(t=e)}return(t+n)/2}f.exports=Z
});var c=s(function(C,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=o();function O(i,r,a){return E(i,r,a,_(i,a))}m.exports=O
});var y=s(function(D,p){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),b=o();P(g,"ndarray",b);p.exports=g
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),q,x=k(h(__dirname,"./native.js"));w(x)?q=z:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
