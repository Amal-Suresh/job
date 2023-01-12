"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Best Time to Buy and Sell Stock",l={unversionedId:"algorithms/easy/best-time-to-buy-and-sell-stock",id:"algorithms/easy/best-time-to-buy-and-sell-stock",title:"Best Time to Buy and Sell Stock",description:"-   Difficulty: Easy.",source:"@site/interview/algorithms/easy/best-time-to-buy-and-sell-stock.md",sourceDirName:"algorithms/easy",slug:"/algorithms/easy/best-time-to-buy-and-sell-stock",permalink:"/algorithms/easy/best-time-to-buy-and-sell-stock",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/algorithms/easy/best-time-to-buy-and-sell-stock.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Best Time to Buy and Sell Stock II",permalink:"/algorithms/easy/best-time-to-buy-and-sell-stock-ii"},next:{title:"Binary Tree Level Order Traversal II",permalink:"/algorithms/easy/binary-tree-level-order-traversal-ii"}},s={},p=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"best-time-to-buy-and-sell-stock"},"Best Time to Buy and Sell Stock"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Difficulty: Easy."),(0,a.kt)("li",{parentName:"ul"},"Related Topics: Array, Dynamic Programming."),(0,a.kt)("li",{parentName:"ul"},"Similar Questions: Maximum Subarray, Best Time to Buy and Sell Stock II, Best Time to Buy and Sell Stock III, Best Time to Buy and Sell Stock IV, Best Time to Buy and Sell Stock with Cooldown.")),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Say you have an array for which the ",(0,a.kt)("strong",{parentName:"p"},"i"),"th element is the price of a given stock on day ",(0,a.kt)("strong",{parentName:"p"},"i"),"."),(0,a.kt)("p",null,"If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit."),(0,a.kt)("p",null,"Note that you cannot sell a stock before you buy one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\n\xa0            Not 7-1 = 6, as selling price needs to be larger than buying price.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: [7,6,4,3,1]\nOutput: 0\nExplanation: In this case, no transaction is done, i.e. max profit = 0.\n")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function (prices) {\n    var n = prices.length;\n    var minPrice = Number.MAX_SAFE_INTEGER;\n    var maxProfit = 0;\n    for (var i = 0; i < n; i++) {\n        if (prices[i] < minPrice) minPrice = prices[i];\n        else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;\n    }\n    return maxProfit;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Explain:")),(0,a.kt)("p",null,"nope."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complexity:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time complexity : O(n)."),(0,a.kt)("li",{parentName:"ul"},"Space complexity : O(1).")))}u.isMDXComponent=!0}}]);