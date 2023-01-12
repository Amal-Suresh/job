"use strict";(self.webpackChunkjob=self.webpackChunkjob||[]).push([[1898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4,title:"NodeJS"},s="NodeJS Questions",r={unversionedId:"questions/nodejs",id:"questions/nodejs",title:"NodeJS",description:"What is NodeJS?",source:"@site/interview/questions/nodejs.md",sourceDirName:"questions",slug:"/questions/nodejs",permalink:"/questions/nodejs",draft:!1,editUrl:"https://github.com/izemil/job/edit/master/interview/questions/nodejs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"NodeJS"},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/questions/frontend"},next:{title:"Common",permalink:"/questions/common"}},l={},d=[{value:"What is NodeJS?",id:"what-is-nodejs",level:3},{value:"Pros and Cons of NodeJS?",id:"pros-and-cons-of-nodejs",level:3},{value:"What is libuv?",id:"what-is-libuv",level:3},{value:"What is an Event Loop?",id:"what-is-an-event-loop",level:3},{value:"List down the various timing features of NodeJS",id:"list-down-the-various-timing-features-of-nodejs",level:3},{value:"What is the diff process.nextTick vs setImmediate",id:"what-is-the-diff-processnexttick-vs-setimmediate",level:3},{value:"What is the diff synchronous vs asynchronous code?",id:"what-is-the-diff-synchronous-vs-asynchronous-code",level:3},{value:"What is the package.json?",id:"what-is-the-packagejson",level:3},{value:"What is the role of the package-lock.json?",id:"what-is-the-role-of-the-package-lockjson",level:3},{value:"What are tilde(~) and caret(^) in package.json?",id:"what-are-tilde-and-caret-in-packagejson",level:3},{value:"Explain\xa0REPL in the context of NodeJS",id:"explainrepl-in-the-context-of-nodejs",level:3},{value:"What is a middleware in NodeJS?",id:"what-is-a-middleware-in-nodejs",level:3},{value:"How do you handle errors in a NodeJS application?",id:"how-do-you-handle-errors-in-a-nodejs-application",level:3},{value:"What is the diff between spawn and fork methods?",id:"what-is-the-diff-between-spawn-and-fork-methods",level:3},{value:"Explain the concept of stub in NodeJS",id:"explain-the-concept-of-stub-in-nodejs",level:3},{value:"What is a Buffer in NodeJS?",id:"what-is-a-buffer-in-nodejs",level:3},{value:"What is a Stream in NodeJS?",id:"what-is-a-stream-in-nodejs",level:3},{value:"What is an Event Emitter in NodeJS?",id:"what-is-an-event-emitter-in-nodejs",level:3},{value:"How do you structure a NodeJS project?",id:"how-do-you-structure-a-nodejs-project",level:3},{value:"How do you improve the performance of a NodeJS application?",id:"how-do-you-improve-the-performance-of-a-nodejs-application",level:3},{value:"How do you test an application?",id:"how-do-you-test-an-application",level:3},{value:"Describe child process in NodeJS",id:"describe-child-process-in-nodejs",level:3},{value:"How to create a clustering in NodeJS?",id:"how-to-create-a-clustering-in-nodejs",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nodejs-questions"},"NodeJS Questions"),(0,a.kt)("h3",{id:"what-is-nodejs"},"What is NodeJS?"),(0,a.kt)("p",null,"Node.js is a runtime environment for executing JavaScript code outside a browser. Node.js is built on top of the Google Chrome V8 JavaScript engine. It allows developers to run JavaScript on the server side with creating server-side applications."),(0,a.kt)("h3",{id:"pros-and-cons-of-nodejs"},"Pros and Cons of NodeJS?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pros:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Event-driven architecture and non-blocking I/O model make it easy to build high-performance servers that can handle many concurrent connections with a small number of threads - good performance for real-time applications (sockets, streams, video)"),(0,a.kt)("li",{parentName:"ul"},"Easy scalability of using microservices and NPM packages as ready-made solutions library"),(0,a.kt)("li",{parentName:"ul"},"Single language for frontend and backend development"),(0,a.kt)("li",{parentName:"ul"},"Single language for cross-platform development (web, desktop, mobile)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cons:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reduces performance when handling Heavy Computing Tasks"),(0,a.kt)("li",{parentName:"ul"},"Frequent changes of main NodeJS API")),(0,a.kt)("h3",{id:"what-is-libuv"},"What is libuv?"),(0,a.kt)("p",null,"libuv is a cross-platform C library and the foundation of the NodeJS runtime that provides support for asynchronous I/O, based on event loops."),(0,a.kt)("h3",{id:"what-is-an-event-loop"},"What is an Event Loop?"),(0,a.kt)("p",null,"In Node.js, the event loop is the mechanism that handles the execution of JavaScript code. It is the core of the Node.js runtime and is responsible for scheduling asynchronous operations, such as I/O operations and timers."),(0,a.kt)("p",null,"The event loop works by continuously monitoring a queue of callback functions that are waiting to be executed. When an event occurs that triggers one of these callback functions, the event loop pushes the callback onto the call stack and executes it. Once the callback has finished executing, the event loop continues to process the next callback in the queue."),(0,a.kt)("p",null,'This process continues until there are no more callbacks left to be executed, at which point the event loop enters a "waiting" state, waiting for new events to occur. This allows Node.js to perform non-blocking I/O operations and to handle many concurrent connections with a small number of threads.'),(0,a.kt)("p",null,"Overall, the event loop is what enables Node.js to be efficient and lightweight, making it well-suited for building scalable network applications."),(0,a.kt)("h3",{id:"list-down-the-various-timing-features-of-nodejs"},"List down the various timing features of NodeJS"),(0,a.kt)("p",null,"Node.js provides a Timers module which contains various functions for executing the code after a specified period of time."),(0,a.kt)("p",null,"Below I have listed down the various functions provided by this module:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setTimeout/clearTimeout")," \u2013 schedule code execution after a designated amount of milliseconds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setInterval/clearInterval"),"\xa0\u2013 execute a block of code multiple times every specified time period"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setImmediate/clearImmediate"),"\xa0\u2013 execute code at the end of the current event loop cycle"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"process.nextTick"),"\xa0\u2013 schedule a callback function that needs to be invoked in the next iteration of the Event Loop")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(() => console.log('timeout'), 0);\nsetImmediate(() => console.log('I run immediately'));\nprocess.nextTick(() => console.log('But I run before that'));\nconsole.log('current event loop');\n\n> current event loop\n> But I run before that\n> timeout\n> I run immediately\n")),(0,a.kt)("h3",{id:"what-is-the-diff-processnexttick-vs-setimmediate"},"What is the diff process.nextTick vs setImmediate"),(0,a.kt)("p",null,"The process.nextTick function waits for the execution of action till the next pass around in the event loop or once the event loop is completed only then it will invoke the callback function."),(0,a.kt)("p",null,"On the other hand, setImmediate() is used to execute a callback method on the next cycle of the event loop which eventually returns it to the event loop in order to execute the I/O operations."),(0,a.kt)("h3",{id:"what-is-the-diff-synchronous-vs-asynchronous-code"},"What is the diff synchronous vs asynchronous code?"),(0,a.kt)("p",null,"Synchronous code is executed in a blocking manner, meaning that the program will pause at each synchronous line of code until the operation is complete."),(0,a.kt)("p",null,"Asynchronous code is executed in a non-blocking manner, allowing the program to continue running while the asynchronous operation is being performed."),(0,a.kt)("h3",{id:"what-is-the-packagejson"},"What is the package.json?"),(0,a.kt)("p",null,"package.json is a file that is used to define the properties of a Node.js package. It is typically located in the root directory of a project, and it contains information such as the package's name, version, dependencies, scripts, and other metadata."),(0,a.kt)("p",null,"The package.json file serves several purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It helps other developers understand what your package does, how it is structured, and how to use it."),(0,a.kt)("li",{parentName:"ul"},"It allows you to specify the dependencies that your package needs in order to function. When someone installs your package, npm (the Node.js package manager) will automatically install all of the dependencies listed in package.json."),(0,a.kt)("li",{parentName:"ul"},"It allows you to specify scripts that can be run to perform various tasks, such as testing, building, or deploying your package.")),(0,a.kt)("p",null,"To create empty package.json you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init -y")),(0,a.kt)("h3",{id:"what-is-the-role-of-the-package-lockjson"},"What is the role of the package-lock.json?"),(0,a.kt)("p",null,"It stores and guarantees the exact same version of every package."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," re-generates the lock file with installing updates"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npm ci")," installs locked dependencies")),(0,a.kt)("h3",{id:"what-are-tilde-and-caret-in-packagejson"},"What are tilde(~) and caret(^) in package.json?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~version")," - Approximately equivalent to version, i.e., only accept new\xa0",(0,a.kt)("strong",{parentName:"li"},"patch"),"\xa0versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"^version")," - Compatible with version, i.e., accept new\xa0",(0,a.kt)("strong",{parentName:"li"},"minor and patch"),"\xa0versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," - Must match version exactly"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">version")," - Must be greater than version (same logic with ",(0,a.kt)("inlineCode",{parentName:"li"},">=version"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<version"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<=version"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.2.x")," - 1.2.0, 1.2.1, etc., but not 1.3.0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*")," - Matches any version"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latest")," - Obtains latest release")),(0,a.kt)("h3",{id:"explainrepl-in-the-context-of-nodejs"},"Explain\xa0REPL in the context of NodeJS"),(0,a.kt)("p",null,'REPL stands for "Read-Eval-Print Loop". It is a simple, interactive programming environment that allows you to execute code snippets and see the results immediately.'),(0,a.kt)("p",null,"In the context of Node.js, the REPL provides a way to try out Node.js code snippets quickly and easily. It is built into the Node.js runtime and can be accessed by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," command in a terminal or command prompt."),(0,a.kt)("p",null,"When you start the REPL, you will see a command prompt, where you can enter Node.js code snippets. When you press Enter, the REPL will evaluate the code snippet and print the result to the console. You can then enter more code snippets and see the results immediately."),(0,a.kt)("p",null,"The REPL is a useful tool for experimenting with Node.js code and testing out small code snippets. It is also a good way to learn the Node.js API and explore the various built-in objects and functions that are available."),(0,a.kt)("h3",{id:"what-is-a-middleware-in-nodejs"},"What is a middleware in NodeJS?"),(0,a.kt)("p",null,"In the context of Node.js, middleware refers to functions that have access to the request and response objects, and the next middleware function in the application's request-response cycle. These functions can perform tasks such as logging requests, parsing request bodies, adding response headers, and handling errors."),(0,a.kt)("p",null,"Middleware functions are used to modify the request and response objects, or to perform additional tasks before or after the primary logic of the application. They are typically organized into a chain, with each middleware function being passed to the next function in the chain."),(0,a.kt)("p",null,"In Node.js, middleware functions are commonly used in web frameworks such as Express.js to provide additional functionality to the application. For example, you might use middleware functions to handle authentication, compression, or caching, or to add CORS headers to the response."),(0,a.kt)("p",null,"Here is an example of a simple middleware function in Node.js using the Express.js framework:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function loggerMiddleware(req, res, next) {\n    console.log(`${req.method} ${req.url}`);\n    next();\n}\n\napp.use(loggerMiddleware);\n")),(0,a.kt)("p",null,"This middleware function logs the HTTP method and URL of each request to the console. The ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," function is called to pass control to the next middleware function in the chain."),(0,a.kt)("h3",{id:"how-do-you-handle-errors-in-a-nodejs-application"},"How do you handle errors in a NodeJS application?"),(0,a.kt)("p",null,"In Node.js, errors can be handled using try-catch blocks or by listening for the 'error' event on an event emitter. It is also a good practice to use a global error-handling middleware function to catch unhandled errors."),(0,a.kt)("h3",{id:"what-is-the-diff-between-spawn-and-fork-methods"},"What is the diff between spawn and fork methods?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fork()")," methods in Node.js are both used to create new child processes, but they work in slightly different ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"spawn()")," method launches a new process and returns a ChildProcess object, which allows you to communicate with the child process using standard input, output, and error streams. The ",(0,a.kt)("inlineCode",{parentName:"li"},"spawn()")," method is generally used for running long-running processes, such as command-line utilities, and it is well-suited for streaming large amounts of data between the parent and child processes."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"fork()")," method is similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"spawn()"),", but it is specifically designed to spawn new Node.js processes. It works by creating a new instance of the Node.js runtime, which allows you to execute a new instance of your application in a separate process. The ",(0,a.kt)("inlineCode",{parentName:"li"},"fork()")," method is well-suited for scenarios where you want to run multiple instances of your application, or where you want to take advantage of multiple CPU cores.")),(0,a.kt)("p",null,"Overall, the ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn()")," method is generally more flexible and powerful, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"fork()")," method is easier to use and better optimized for Node.js applications. Which method you choose will depend on your specific needs and requirements."),(0,a.kt)("h3",{id:"explain-the-concept-of-stub-in-nodejs"},"Explain the concept of stub in NodeJS"),(0,a.kt)("p",null,"In Node.js, stubs are basically the programs or functions that are used for stimulating the module or component behavior. During any test cases, stubs provide the canned answers of the functions"),(0,a.kt)("h3",{id:"what-is-a-buffer-in-nodejs"},"What is a Buffer in NodeJS?"),(0,a.kt)("p",null,"Buffer global class is used for storing the raw data in an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it\u2019s necessary to work with Buffers."),(0,a.kt)("h3",{id:"what-is-a-stream-in-nodejs"},"What is a Stream in NodeJS?"),(0,a.kt)("p",null,"Stream is the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data."),(0,a.kt)("p",null,"In Node.js, there are four fundamental types of streams:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Readable:"),"\xa0for reading large chunks of data from the source."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Writable:"),"\xa0for writing large chunks of data to the destination."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Duplex:"),"\xa0for both the functions - read and write."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Transform:"),"\xa0It is a duplex stream that is used for modifying the data.")),(0,a.kt)("h3",{id:"what-is-an-event-emitter-in-nodejs"},"What is an Event Emitter in NodeJS?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter")," class is a built-in class in Node.js that allows objects to emit events and register listeners for those events. It is a useful way to implement a publish-subscribe pattern, where an object can publish events to which other objects can subscribe."),(0,a.kt)("p",null,"Here is an example of how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter")," class in Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const EventEmitter = require('events');\n\nclass MyEmitter extends EventEmitter {}\n\nconst myEmitter = new MyEmitter();\n\nmyEmitter.on('start', (start, end) => {\n    console.log(`started from ${start} to ${end}`);\n});\n\nmyEmitter.emit('start', 1, 100);\n")),(0,a.kt)("h3",{id:"how-do-you-structure-a-nodejs-project"},"How do you structure a NodeJS project?"),(0,a.kt)("p",null,"A Node.js project should have a clear and organized file and directory structure, with a well-defined entry point (usually a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"server.js"),"). It should also have a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file that defines the dependencies and scripts for the project."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For advanced answer, try to discover NestJS framework architecture")),(0,a.kt)("h3",{id:"how-do-you-improve-the-performance-of-a-nodejs-application"},"How do you improve the performance of a NodeJS application?"),(0,a.kt)("p",null,"There are several ways to improve the performance of a Node.js application, including optimizing the code, using caching, and using a load balancer to distribute incoming requests across multiple servers. It is also important to monitor the performance of the application and to profile it to identify any bottlenecks or inefficiencies."),(0,a.kt)("h3",{id:"how-do-you-test-an-application"},"How do you test an application?"),(0,a.kt)("p",null,"There are several ways to test an application, including using unit tests, integration tests, and end-to-end tests. Common testing frameworks for Node.js include Mocha, Jest, and Jasmine."),(0,a.kt)("h3",{id:"describe-child-process-in-nodejs"},"Describe child process in NodeJS"),(0,a.kt)("p",null,"In Node.js, the ",(0,a.kt)("inlineCode",{parentName:"p"},"child_process")," module provides an API for creating and managing child processes. Child processes are separate instances of the Node.js runtime that can be spawned from a parent process. They can be used to run long-running tasks or processes in parallel with the parent process, or to execute command-line utilities or other external programs."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"child_process")," module provides four different methods for creating child processes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"spawn()"),": Launches a new process and returns a ChildProcess object, which allows you to communicate with the child process using standard input, output, and error streams."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"exec()"),": Executes a command in a child process and buffers the output."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"execFile()"),": Executes a command in a child process, providing the option to specify the encoding for the output."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fork()"),": Spawns a new Node.js process and returns a ChildProcess object, allowing the parent and child processes to communicate using inter-process communication (IPC).")),(0,a.kt)("h3",{id:"how-to-create-a-clustering-in-nodejs"},"How to create a clustering in NodeJS?"),(0,a.kt)("p",null,"Clustering in Node.js refers to the ability to create a group of child processes that can share server ports and work together to handle incoming requests. Clustering is a way to improve the performance and scalability of a Node.js application, by taking advantage of multiple CPU cores and distributing the workload across multiple processes."),(0,a.kt)("p",null,"To create a cluster in Node.js, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster")," module, which is part of the Node.js core. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster")," module allows you to create a master process that can spawn and manage a group of worker processes. Each worker process runs a separate instance of the application, and the master process distributes incoming requests to the workers using a round-robin algorithm."),(0,a.kt)("p",null,"Here is an example of how to create a cluster in Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const cluster = require('cluster');\nconst http = require('http');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n    console.log(`Master ${process.pid} is running`);\n\n    // Fork workers.\n    for (let i = 0; i < numCPUs; i++) {\n        cluster.fork();\n    }\n\n    cluster.on('exit', (worker, code, signal) => {\n        console.log(`worker ${worker.process.pid} died`);\n    });\n} else {\n    // Workers can share any TCP connection\n    // In this case it is an HTTP server\n    http.createServer((req, res) => {\n        res.writeHead(200);\n        res.end('hello world\\n');\n    }).listen(8000);\n\n    console.log(`Worker ${process.pid} started`);\n}\n")),(0,a.kt)("p",null,"In this example, the master process creates a worker process for each CPU core, and each worker process runs an HTTP server that listens on port 8000. When an incoming request is received, the master process distributes it to one of the worker processes using a round-robin algorithm. This allows the application to handle multiple requests concurrently and improve its overall performance and scalability."))}p.isMDXComponent=!0}}]);