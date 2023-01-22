"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[7775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},y=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,h=u["".concat(o,".").concat(f)]||u[f]||c[f]||a;return n?r.createElement(h,s(s({ref:t},y),{},{components:n})):r.createElement(h,s({ref:t},y))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,s[1]=p;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={},s="What utility types exist and their usage",p={unversionedId:"questions/typescript/utility-types",id:"questions/typescript/utility-types",title:"What utility types exist and their usage",description:"TypeScript provides a set of utility types that can be used to create and manipulate types in a more expressive and flexible way. Some of the utility types provided by TypeScript are:",source:"@site/interview/questions/typescript/utility-types.md",sourceDirName:"questions/typescript",slug:"/questions/typescript/utility-types",permalink:"/questions/typescript/utility-types",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/typescript/utility-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Describe Unions and Intersection Types",permalink:"/questions/typescript/union-intersection"},next:{title:"Explain `void` vs `undefined`",permalink:"/questions/typescript/void-vs-undefined"}},o={},l=[],y={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-utility-types-exist-and-their-usage"},"What utility types exist and their usage"),(0,i.kt)("p",null,"TypeScript provides a set of utility types that can be used to create and manipulate types in a more expressive and flexible way. Some of the utility types provided by TypeScript are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Partial<T>"),": This type creates a new type that represents the partial version of a type ",(0,i.kt)("inlineCode",{parentName:"li"},"T"),". The partial version of a type has all the properties of the original type, but they are all optional. This type is useful for creating types that represent a subset of the properties of another type, or for creating types that can be used to partially update the properties of another type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Readonly<T>"),": This type creates a new type that represents the read-only version of a type ",(0,i.kt)("inlineCode",{parentName:"li"},"T"),". The read-only version of a type has all the properties of the original type, but they are all read-only. This type is useful for creating types that cannot be modified, and for creating types that can only be used for reading the properties of another type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pick<T, K>"),": This type creates a new type that represents a subset of the properties of a type ",(0,i.kt)("inlineCode",{parentName:"li"},"T"),", selected by a set of keys ",(0,i.kt)("inlineCode",{parentName:"li"},"K"),". This type is useful for creating types that represent a subset of the properties of another type, based on a specific set of keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Omit<T, K>"),": This type creates a new type that represents a subset of the properties of a type ",(0,i.kt)("inlineCode",{parentName:"li"},"T"),", excluding a set of keys ",(0,i.kt)("inlineCode",{parentName:"li"},"K"),". This type is useful for creating types that represent a subset of the properties of another type, excluding a specific set of keys."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Record<K, T>"),": This type creates a new type that represents an object with a set of keys ",(0,i.kt)("inlineCode",{parentName:"li"},"K")," and values of type ",(0,i.kt)("inlineCode",{parentName:"li"},"T"),". This type is useful for creating types that represent objects with a specific set of keys and values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Exclude<T, U>"),": This type creates a new type that represents the set of values that are in a type ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," but not in a type ",(0,i.kt)("inlineCode",{parentName:"li"},"U"),". This type is useful for creating types that represent the set of values that are in one type but not in another type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Extract<T, U>"),": This type creates a new type that represents the set of values that are in a type ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," and also in a type ",(0,i.kt)("inlineCode",{parentName:"li"},"U"),". This type is useful for creating types that represent the set of values that are in both types."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReturnType<T>"),": This type creates a new type that represents the return type of a function or a method ",(0,i.kt)("inlineCode",{parentName:"li"},"T"),". This type is useful for creating types that represent the return type of a function or a method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InstanceType<T>"),": This type creates a new type that represents the instance type of a class or a constructor function ",(0,i.kt)("inlineCode",{parentName:"li"},"T"),". This type is useful for creating types that represent the instance type of a class or a constructor function.  ")),(0,i.kt)("p",null,"These are some of the utility types provided by TypeScript, and they can be used to create and manipulate types in a more expressive and flexible way. It is important to understand the role and the use of these utility types in TypeScript, and to use them appropriately in your code."))}u.isMDXComponent=!0}}]);