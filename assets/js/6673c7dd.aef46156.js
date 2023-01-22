"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[9463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={},i="What is a Stream in NodeJS?",s={unversionedId:"questions/nodejs/nodejs-stream",id:"questions/nodejs/nodejs-stream",title:"What is a Stream in NodeJS?",description:"Stream is the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data.",source:"@site/interview/questions/nodejs/nodejs-stream.md",sourceDirName:"questions/nodejs",slug:"/questions/nodejs/nodejs-stream",permalink:"/questions/nodejs/nodejs-stream",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/nodejs/nodejs-stream.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How does routing work in NodeJS?",permalink:"/questions/nodejs/nodejs-routing"},next:{title:"Explain the concept of stub in NodeJS",permalink:"/questions/nodejs/nodejs-stub"}},l={},m=[],c={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-a-stream-in-nodejs"},"What is a Stream in NodeJS?"),(0,a.kt)("p",null,"Stream is the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data."),(0,a.kt)("p",null,"In Node.js, there are four fundamental types of streams:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Readable:"),"\xa0for reading large chunks of data from the source."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Writable:"),"\xa0for writing large chunks of data to the destination."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Duplex:"),"\xa0for both the functions - read and write."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Transform:"),"\xa0It is a duplex stream that is used for modifying the data.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Reading from a Stream:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nlet data = "";\n\n// Create a readable stream\nconst readerStream = fs.createReadStream("file.txt");\n\n// Set the encoding to be utf8.\nreaderStream.setEncoding("UTF8");\n\n// Handle stream events --\x3e data, end, and error\nreaderStream.on("data", function (chunk) {\n  data += chunk;\n});\n\nreaderStream.on("end", function () {\n  console.log(data);\n});\n\nreaderStream.on("error", function (err) {\n  console.log(err.stack);\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Writing to a Stream:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\nconst data = "File writing to a stream example";\n\n// Create a writable stream\nconst writerStream = fs.createWriteStream("file.txt");\n\n// Write the data to stream with encoding to be utf8\nwriterStream.write(data, "UTF8");\n\n// Mark the end of file\nwriterStream.end();\n\n// Handle stream events --\x3e finish, and error\nwriterStream.on("finish", function () {\n  console.log("Write completed.");\n});\n\nwriterStream.on("error", function (err) {\n  console.log(err.stack);\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Piping the Streams:")),(0,a.kt)("p",null,"Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require(\"fs\");\n\n// Create a readable stream\nconst readerStream = fs.createReadStream('input.txt');\n\n// Create a writable stream\nconst writerStream = fs.createWriteStream('output.txt');\n\n// Pipe the read and write operations\n// read input.txt and write data to output.txt\nreaderStream.pipe(writerStream);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Chaining the Streams:")),(0,a.kt)("p",null,"Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require(\"fs\");\nconst zlib = require('zlib');\n\n// Compress the file input.txt to input.txt.gz\nfs.createReadStream('input.txt')\n   .pipe(zlib.createGzip())\n   .pipe(fs.createWriteStream('input.txt.gz'));\n  \nconsole.log(\"File Compressed.\");\n")))}u.isMDXComponent=!0}}]);