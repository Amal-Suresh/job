"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[5923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,g=p["".concat(u,".").concat(d)]||p[d]||c[d]||s;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={tags:["Medium","Array","Two Pointers"]},i="Sum 3 Closest",o={unversionedId:"algorithms/medium/sum-3-closest",id:"algorithms/medium/sum-3-closest",title:"Sum 3 Closest",description:"Given an array nums of n integers and an integer target, find three integers in nums\xa0such that the sum is closest to\xa0target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",source:"@site/interview/algorithms/medium/sum-3-closest.md",sourceDirName:"algorithms/medium",slug:"/algorithms/medium/sum-3-closest",permalink:"/algorithms/medium/sum-3-closest",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/algorithms/medium/sum-3-closest.md",tags:[{label:"Medium",permalink:"/tags/medium"},{label:"Array",permalink:"/tags/array"},{label:"Two Pointers",permalink:"/tags/two-pointers"}],version:"current",frontMatter:{tags:["Medium","Array","Two Pointers"]},sidebar:"tutorialSidebar",previous:{title:"Binary Tree Preorder Traversal",permalink:"/algorithms/medium/binary-tree-preorder-traversal"},next:{title:"Sum 3",permalink:"/algorithms/medium/sum-3"}},u={},l=[],m={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sum-3-closest"},"Sum 3 Closest"),(0,a.kt)("p",null,"Given an array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," of ",(0,a.kt)("strong",{parentName:"p"},"n")," integers and an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", find three integers in ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0such that the sum is closest to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"target"),". Return the sum of the three integers. You may assume that each input would have exactly one solution."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Given array nums = [-1, 2, 1, -4], and target = 1.\n\nThe sum that is closest to the target is 2. (-1 + 2 + 1 = 2).\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Solution"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complexity:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time complexity : O(n^2)."),(0,a.kt)("li",{parentName:"ul"},"Space complexity : O(1).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar threeSumClosest = function (nums, target) {\n    var len = nums.length;\n    var res = nums[0] + nums[1] + nums[2];\n    var sum = 0;\n    var l = 0;\n    var r = 0;\n    nums.sort((a, b) => a - b);\n    for (var i = 0; i < len - 2; i++) {\n        if (i > 0 && nums[i] === nums[i - 1]) continue;\n        l = i + 1;\n        r = len - 1;\n        while (l < r) {\n            sum = nums[i] + nums[l] + nums[r];\n            if (sum < target) {\n                l++;\n            } else if (sum > target) {\n                r--;\n            } else {\n                return sum;\n            }\n            if (Math.abs(sum - target) < Math.abs(res - target)) res = sum;\n        }\n    }\n    return res;\n};\n"))))}p.isMDXComponent=!0}}]);