"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[1551],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5753:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={tags:["Hard","Stack","Tree"]},l="Binary Tree Postorder Traversal",i={unversionedId:"algorithms/hard/binary-tree-postorder-traversal",id:"algorithms/hard/binary-tree-postorder-traversal",title:"Binary Tree Postorder Traversal",description:"Given a binary tree, return the postorder traversal of its nodes' values.",source:"@site/interview/algorithms/hard/binary-tree-postorder-traversal.md",sourceDirName:"algorithms/hard",slug:"/algorithms/hard/binary-tree-postorder-traversal",permalink:"/algorithms/hard/binary-tree-postorder-traversal",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/algorithms/hard/binary-tree-postorder-traversal.md",tags:[{label:"Hard",permalink:"/tags/hard"},{label:"Stack",permalink:"/tags/stack"},{label:"Tree",permalink:"/tags/tree"}],version:"current",frontMatter:{tags:["Hard","Stack","Tree"]},sidebar:"tutorialSidebar",previous:{title:"Binary Tree Maximum Path Sum",permalink:"/algorithms/hard/binary-tree-maximum-path-sum"},next:{title:"Candy",permalink:"/algorithms/hard/candy"}},s={},p=[],u={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-tree-postorder-traversal"},"Binary Tree Postorder Traversal"),(0,a.kt)("p",null,"Given a binary tree, return the ",(0,a.kt)("strong",{parentName:"p"},"postorder")," traversal of its nodes' values."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input:\xa0[1,null,2,3]\n   1\n    \\\n     2\n    /\n   3\n\nOutput:\xa0[3,2,1]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Follow up:")," Recursive solution is trivial, could you do it iteratively?"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Solution"))," 1",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar postorderTraversal = function (root) {\n    var res = [];\n    helper(root, res);\n    return res;\n};\n\nvar helper = function (root, res) {\n    if (!root) return;\n    helper(root.left, res);\n    helper(root.right, res);\n    res.push(root.val);\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Explain:")),(0,a.kt)("p",null,"nope."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complexity:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time complexity : O(n)."),(0,a.kt)("li",{parentName:"ul"},"Space complexity : O(n).")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar postorderTraversal = function (root) {\n    if (!root) return [];\n    var res = [];\n    var stack = [];\n    var node = root;\n    while (node || stack.length) {\n        if (node) {\n            stack.push(node);\n            res.unshift(node.val);\n            node = node.right;\n        } else {\n            node = stack.pop();\n            node = node.left;\n        }\n    }\n    return res;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Complexity:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time complexity : O(n)."),(0,a.kt)("li",{parentName:"ul"},"Space complexity : O(n)."))))}c.isMDXComponent=!0}}]);