"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},s='What is the difference between "resetting" and "normalizing" CSS?',a={unversionedId:"questions/frontend/reset-vs-normilize",id:"questions/frontend/reset-vs-normilize",title:'What is the difference between "resetting" and "normalizing" CSS?',description:"1. Resetting: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.",source:"@site/interview/questions/frontend/reset-vs-normilize.md",sourceDirName:"questions/frontend",slug:"/questions/frontend/reset-vs-normilize",permalink:"/questions/frontend/reset-vs-normilize",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/frontend/reset-vs-normilize.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:'Explain the use of `rel="nofollow"`, `rel="noreferrer"`, `rel="noopener"` attributes?',permalink:"/questions/frontend/rel-nofollow-noreferrer-noopener"},next:{title:"What is the responsive design, and how do you implement it?",permalink:"/questions/frontend/responsive-design"}},l={},c=[{value:"How would you approach fixing browser-specific styling issues?",id:"how-would-you-approach-fixing-browser-specific-styling-issues",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-the-difference-between-resetting-and-normalizing-css"},'What is the difference between "resetting" and "normalizing" CSS?'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Resetting"),": CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, \nacronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, \nsub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, \ncaption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, \nfooter, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  \n   margin: 0;  \n   padding: 0;  \n   border: 0;  \n   font-size: 100%;  \n   font: inherit;  \n   vertical-align: baseline; \n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Normalizing"),": Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \n  Correct the font size and margin on `h1` elements within `section`  \n  and `article` contexts in Chrome, Firefox, and Safari.\n*/\n h1 {  font-size: 2em;  margin: 0.67em 0; }\n")),(0,o.kt)("h2",{id:"how-would-you-approach-fixing-browser-specific-styling-issues"},"How would you approach fixing browser-specific styling issues?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a separate style sheet that only loads when that specific browser is being used. This technique requires server-side rendering though."),(0,o.kt)("li",{parentName:"ul"},"Use\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"autoprefixer"),"\xa0to automatically add vendor prefixes to your code."),(0,o.kt)("li",{parentName:"ul"},"Use Reset CSS or Normalize.css.")))}u.isMDXComponent=!0}}]);