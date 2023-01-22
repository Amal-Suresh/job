"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[1711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="When to use css grid and flexbox?",s={unversionedId:"questions/frontend/css-grid-vs-flexbox",id:"questions/frontend/css-grid-vs-flexbox",title:"When to use css grid and flexbox?",description:"-   CSS Grid Layout is a\xa0two-dimensional\xa0system, meaning it can handle both columns and rows, unlike flexbox which is largely a\xa0one-dimensional\xa0system (either in a column or a row).",source:"@site/interview/questions/frontend/css-grid-vs-flexbox.md",sourceDirName:"questions/frontend",slug:"/questions/frontend/css-grid-vs-flexbox",permalink:"/questions/frontend/css-grid-vs-flexbox",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/frontend/css-grid-vs-flexbox.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How does CSS work under the hood?",permalink:"/questions/frontend/css-engine"},next:{title:"Explain CSS position property?",permalink:"/questions/frontend/css-position"}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"when-to-use-css-grid-and-flexbox"},"When to use css grid and flexbox?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CSS Grid Layout is a\xa0",(0,o.kt)("strong",{parentName:"li"},"two-dimensional"),"\xa0system, meaning it can handle both columns and rows, unlike flexbox which is largely a\xa0",(0,o.kt)("strong",{parentName:"li"},"one-dimensional"),"\xa0system (either in a column or a row)."),(0,o.kt)("li",{parentName:"ul"},"A core difference between CSS Grid and Flexbox is that \u2014 CSS Grid\u2019s approach is\xa0",(0,o.kt)("strong",{parentName:"li"},"layout-first"),"\xa0while Flexbox\u2019 approach is\xa0",(0,o.kt)("strong",{parentName:"li"},"content-first"),". If you are well aware of your content before making layout, then blindly opt for Flexbox and if not, opt for CSS Grid."),(0,o.kt)("li",{parentName:"ul"},"Flexbox layout is most appropriate to the components of an application (as most of them are fundamentally linear), and\xa0",(0,o.kt)("strong",{parentName:"li"},"small-scale"),"\xa0layouts, while the Grid layout is intended for\xa0",(0,o.kt)("strong",{parentName:"li"},"larger-scale"),"\xa0layouts which aren\u2019t linear in their design."),(0,o.kt)("li",{parentName:"ul"},"If you only need to define a layout as a row or a column, then you probably need flexbox. If you want to define a grid and fit content into it in two dimensions \u2014 you need the grid.")))}d.isMDXComponent=!0}}]);