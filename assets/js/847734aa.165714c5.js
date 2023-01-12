"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[6527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),y=a,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Best Time to Buy and Sell Stock II",l={unversionedId:"algorithms/easy/best-time-to-buy-and-sell-stock-ii",id:"algorithms/easy/best-time-to-buy-and-sell-stock-ii",title:"Best Time to Buy and Sell Stock II",description:"-   Difficulty: Easy.",source:"@site/interview/algorithms/easy/best-time-to-buy-and-sell-stock-ii.md",sourceDirName:"algorithms/easy",slug:"/algorithms/easy/best-time-to-buy-and-sell-stock-ii",permalink:"/algorithms/easy/best-time-to-buy-and-sell-stock-ii",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/algorithms/easy/best-time-to-buy-and-sell-stock-ii.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Balanced Binary Tree",permalink:"/algorithms/easy/balanced-binary-tree"},next:{title:"Best Time to Buy and Sell Stock",permalink:"/algorithms/easy/best-time-to-buy-and-sell-stock"}},s={},p=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"best-time-to-buy-and-sell-stock-ii"},"Best Time to Buy and Sell Stock II"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Difficulty: Easy."),(0,a.kt)("li",{parentName:"ul"},"Related Topics: Array, Greedy."),(0,a.kt)("li",{parentName:"ul"},"Similar Questions: Best Time to Buy and Sell Stock, Best Time to Buy and Sell Stock III, Best Time to Buy and Sell Stock IV, Best Time to Buy and Sell Stock with Cooldown, Best Time to Buy and Sell Stock with Transaction Fee.")),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"Say you have an array for which the ",(0,a.kt)("strong",{parentName:"p"},"i"),"th element is the price of a given stock on day ",(0,a.kt)("strong",{parentName:"p"},"i"),"."),(0,a.kt)("p",null,"Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: [7,1,5,3,6,4]\nOutput: 7\nExplanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.\n\xa0            Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: [1,2,3,4,5]\nOutput: 4\nExplanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.\n\xa0            Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are\n\xa0            engaging multiple transactions at the same time. You must sell before buying again.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: [7,6,4,3,1]\nOutput: 0\nExplanation: In this case, no transaction is done, i.e. max profit = 0.\n")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function (prices) {\n    var max = 0;\n    var len = prices.length;\n    for (var i = 1; i < len; i++) {\n        if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];\n    }\n    return max;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Explain:")),(0,a.kt)("p",null,"\u65e0\u9650\u6b21\u7684\u4e70\u5165\u629b\u51fa\uff0c\u628a\u6240\u6709\u4e0a\u5347\u7684\u4ef7\u683c\u5f53\u505a\u5229\u6da6\u5c31\u597d\u3002\u5373\u6bcf\u6b21\u4f4e\u7684\u65f6\u5019\u4e70\u5165\uff0c\u9ad8\u7684\u65f6\u5019\u629b\u51fa\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complexity:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time complexity : O(n)."),(0,a.kt)("li",{parentName:"ul"},"Space complexity : O(1).")))}c.isMDXComponent=!0}}]);