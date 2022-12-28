"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>y,frontMatter:()=>d,metadata:()=>g,toc:()=>w});var r=t(7462),a=t(7294),o=t(3905),s=t(6010);const c="browserWindow_my1Q",i="browserWindowHeader_jXSR",l="buttons_uHc7",u="browserWindowAddressBar_Pd8y",p="dot_giz1",f="browserWindowBody_Idgs";function m(e){let{children:n,minHeight:t,url:r}=e;return a.createElement("div",{className:c,style:{minHeight:t}},a.createElement("div",{className:i},a.createElement("div",{className:l},a.createElement("span",{className:p,style:{background:"#f25f58"}}),a.createElement("span",{className:p,style:{background:"#fbbe3c"}}),a.createElement("span",{className:p,style:{background:"#58cb42"}})),r&&a.createElement("div",{className:(0,s.Z)(u,"text--truncate")},r)),a.createElement("div",{className:f},n))}const d={},v="Issues",g={unversionedId:"tasks/issues",id:"tasks/issues",title:"Issues",description:"How to execute string as function",source:"@site/interview/tasks/issues.md",sourceDirName:"tasks",slug:"/tasks/issues",permalink:"/interview/tasks/issues",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/tasks/issues.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tasks",permalink:"/interview/category/tasks"}},b={},w=[{value:"How to execute string as function",id:"how-to-execute-string-as-function",level:3},{value:"What is the result?",id:"what-is-the-result",level:3},{value:"And classical solution with closure:",id:"and-classical-solution-with-closure",level:3},{value:"Inheritance instanceof",id:"inheritance-instanceof",level:3},{value:"How to create a private variable?",id:"how-to-create-a-private-variable",level:3},{value:"Counter function as below",id:"counter-function-as-below",level:3}],h={toc:w};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"issues"},"Issues"),(0,o.kt)("h3",{id:"how-to-execute-string-as-function"},"How to execute string as function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const scriptStr = \"console.log('hey');\";\n\neval(scriptStr);\nnew Function(scriptStr)();\n")),(0,o.kt)("h3",{id:"what-is-the-result"},"What is the result?"),(0,o.kt)(m,{mdxType:"BrowserWindow"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var funcs = [];\nfor (var i = 0; i < 3; i++) {\n    funcs[i] = function () {\n        console.log('My value: ' + i);\n    };\n}\n\nfor (const f of funcs) {\n    f();\n}\n"))),(0,o.kt)("h3",{id:"and-classical-solution-with-closure"},"And classical solution with closure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var funcs = [];\nfunction createfunc(i) {\n    return function () {\n        console.log('My value: ' + i);\n    };\n}\n\nfor (var i = 0; i < 3; i++) {\n    funcs[i] = createfunc(i);\n}\n\nfor (var j = 0; j < 3; j++) {\n    // and now let's run each one to see\n    funcs[j]();\n}\n")),(0,o.kt)("h3",{id:"inheritance-instanceof"},"Inheritance instanceof"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Person {}\n\nclass Chief extends Person {}\n\nclass Programmer extends Person {}\n\nconst programmer = new Programmer();\n\nconsole.log(programmer instanceof Person);\nconsole.log(programmer instanceof Programmer);\nconsole.log(programmer instanceof Object);\nconsole.log(programmer instanceof Chief);\n")),(0,o.kt)("h3",{id:"how-to-create-a-private-variable"},"How to create a private variable?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function func() {\n    const priv = 'secret code';\n    return function () {\n        return priv;\n    };\n}\nvar getPriv = func();\n")),(0,o.kt)("h3",{id:"counter-function-as-below"},"Counter function as below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const counter = Counter();\ncounter.inc();\ncounter.dec();\n\nfunction Counter() {\n    let count = 0;\n\n    return {\n        inc() {\n            return (count += 1);\n        },\n        dec() {\n            return (count -= 1);\n        },\n    };\n}\n")))}y.isMDXComponent=!0}}]);