(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{5506:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zoom",function(){return o(6551)}])},6551:function(e,n,o){"use strict";o.r(n);var i=o(5893),s=o(7294),t=o(7283);o(767),o(3253);let l=e=>{let[n,o]=(0,s.useState)(1),[l,r]=(0,s.useState)(null),a=()=>{o(e=>e+.1)},c=()=>{o(e=>e-.1)},u=e=>{console.log(e)},d=e=>{console.error(e)},_=async()=>{let e=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",zoom:{ideal:n}}});r(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.T,{delay:300,onError:d,onScan:u,style:{width:"100%"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{onClick:a,className:"link",children:"Zoom +"}),(0,i.jsx)("button",{onClick:c,className:"link",children:"Zoom -"}),(0,i.jsx)("button",{onClick:_,className:"link",children:"Ouvrir la cam\xe9ra"})]}),(0,i.jsx)("video",{ref:e=>l&&(e.srcObject=l),style:{display:"none"}})]})};n.default=l}},function(e){e.O(0,[738,513,774,888,179],function(){return e(e.s=5506)}),_N_E=e.O()}]);