import{S as p,i as g,s as b,C as v,k as w,l as $,m as S,h as f,n as y,b as C,D,E as R,F as A,g as E,d as F,o as J}from"../chunks/index.fca42830.js";import{a as K,Z as _,d as h,K as M,J as T,b as U}from"../chunks/store.5bf1a629.js";function Z(l){let s,n;const i=l[1].default,e=v(i,l,l[0],null);return{c(){s=w("div"),e&&e.c(),this.h()},l(t){s=$(t,"DIV",{class:!0});var a=S(s);e&&e.l(a),a.forEach(f),this.h()},h(){y(s,"class","mainContainer svelte-18j2ba9")},m(t,a){C(t,s,a),e&&e.m(s,null),n=!0},p(t,[a]){e&&e.p&&(!n||a&1)&&D(e,i,t,t[0],n?A(i,t[0],a,null):R(t[0]),null)},i(t){n||(E(e,t),n=!0)},o(t){F(e,t),n=!1},d(t){t&&f(s),e&&e.d(t)}}}function j(l,s,n){let{$$slots:i={},$$scope:e}=s;const t=["/","product"];return J(()=>(console.log("Mounting"),K.onAuthStateChanged(async o=>{const c=window.location.pathname;if(!o&&!t.includes(c)){window.location.href="/";return}if(o&&c==="/"){window.location.href="/dashboard";return}if(!o)return;let r;const m=_(h,"users",o.uid),d=await M(m);if(d.exists())console.log("Fetching User"),r=d.data();else{console.log("Creating User");const u=_(h,"users",o.uid);r={email:o.email,todos:[]},await T(u,r,{merge:!0})}U.update(u=>({...u,user:o,data:r,loading:!1}))}))),l.$$set=a=>{"$$scope"in a&&n(0,e=a.$$scope)},[e,i]}class I extends p{constructor(s){super(),g(this,s,j,Z,b,{})}}export{I as component};