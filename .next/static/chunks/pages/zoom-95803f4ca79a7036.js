(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{5506:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zoom",function(){return o(6551)}])},6551:function(e,n,o){"use strict";o.r(n);var t=o(5893),i=o(7294),s=o(7283);o(767),o(3253);let l=e=>{let[n,o]=(0,i.useState)(1),[l,a]=(0,i.useState)(null),c=()=>{o(e=>e+.1)},r=()=>{o(e=>e-.1)},u=e=>{console.log(e)},d=e=>{console.error(e)},_=async()=>{let e=await navigator.mediaDevices.getUserMedia({video:{zoom:{ideal:n},facingMode:{exact:"environment"}}});a(e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.T,{delay:300,onError:d,onScan:u,style:{width:"100%"}}),(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{onClick:c,className:"link",children:"Zoom +"}),(0,t.jsx)("button",{onClick:r,className:"link",children:"Zoom -"}),(0,t.jsx)("button",{onClick:_,className:"link",children:"Ouvrir la cam\xe9ra"})]}),(0,t.jsx)("video",{ref:e=>l&&(e.srcObject=l),style:{display:"none"}})]})};n.default=l}},function(e){e.O(0,[738,513,774,888,179],function(){return e(e.s=5506)}),_N_E=e.O()}]);