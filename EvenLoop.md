## Event Loop of JavaScript

![ImageOfEventLoop](https://github.com/salmanshaikh18/LearnJavaScript/blob/main/EventLoopImg.jpeg)


## JS Engine

`A JavaScript engine is like a translator and executor for JavaScript code in a web browser or another environment.` Its job is to take the JavaScript code that developers write and make it work on your computer or device. The engine is a crucial part of web browsers, as it allows websites to be interactive and dynamic.

Here's a simplified breakdown of how a JavaScript engine works:

1. **Parsing:** The engine reads the JavaScript code written by developers. It checks if the code follows the correct grammar and structure, just like checking if a sentence is written correctly in a language. This process is called parsing.

2. **Compilation/Translation:** If the code is correct, the engine translates or compiles it into a format that the computer or device can understand and execute. This translated code is often referred to as bytecode or machine code.

3. **Execution:** The engine executes the translated code, carrying out the tasks specified by the JavaScript. For example, it can update the content on a webpage, respond to user interactions like button clicks, or perform calculations.

Popular web browsers, such as Chrome, Firefox, and Safari, each have their own JavaScript engine. Some well-known JavaScript engines include V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari). These engines constantly evolve to improve performance and support new features of the JavaScript language.

In summary, a JavaScript engine is a crucial component that enables the execution of JavaScript code, making websites interactive and providing a dynamic user experience.


## CallStack and Heap Memory

**Call Stack in JavaScript:**

`The call stack in JavaScript is a mechanism that keeps track of function calls and their execution context during the runtime of a program.` It's like a stack of function calls, where each function call is added to the top of the stack when it starts, and removed when it completes. The call stack helps manage the flow of control in your program.

Here's a simplified explanation of how the call stack works:

1. **Function Calls:** When a function is called, a new frame is pushed onto the top of the call stack. This frame contains information about the function, including local variables and the current execution point.

2. **Nested Calls:** If a function calls another function, a new frame for the called function is added on top of the current frame. This process continues for nested function calls.

3. **Function Returns:** When a function completes its execution, its frame is popped off the top of the stack, and control returns to the calling function.

The call stack is crucial for understanding the order of execution in your code and managing the scope and context of function calls.

**Heap Memory in JavaScript:**

`Heap memory in JavaScript is an area of memory where objects are stored.` Objects are complex data structures, and they may have properties and methods. Unlike the call stack, which is used for managing function calls and their local variables, the heap is used for dynamic memory allocation.

Here are key points about heap memory in JavaScript:

1. **Object Storage:** When you create objects (arrays, functions, custom objects), they are stored in the heap. The heap allows for flexible memory allocation and deallocation, as objects can be created and destroyed during the program's execution.

2. **Reference-Based Access:** Variables in JavaScript store references to objects rather than the actual objects themselves. This means that the variable points to the memory location (address) where the object is stored in the heap.

3. **Garbage Collection:** JavaScript employs automatic garbage collection to reclaim memory occupied by objects that are no longer reachable or in use. The garbage collector identifies and frees up memory from objects that are no longer needed.

`In summary, the call stack manages the execution context and flow of function calls, while the heap is used for dynamic memory allocation and storage of objects in JavaScript. They work together to enable the execution and memory management in a JavaScript program.`


## Event Loop and Web API

`In JavaScript, the Event Loop and Web APIs work together to handle asynchronous operations and ensure the responsiveness of web applications. Let's break down how they interact:`

1. **Event Loop:**
   - `The event loop is a mechanism in JavaScript that handles the execution of code. It continuously checks the call stack and the message queue to determine which task to execute next.`

2. **Web APIs:**
   - `Web APIs are sets of rules and tools provided by web browsers that allow JavaScript to interact with various functionalities. Examples include the DOM (Document Object Model) API, the Fetch API for making HTTP requests, and the Timer API for handling timeouts and intervals.`

Here's how the Event Loop and Web APIs collaborate in handling asynchronous tasks:

- **Asynchronous Tasks:**
  - When an asynchronous operation is encountered in JavaScript (e.g., a `setTimeout` function or an HTTP request using the Fetch API), the JavaScript engine offloads that task to the corresponding Web API.

- **Execution in Web API:**
  - The Web API executes the asynchronous task outside of the main JavaScript thread. For example, if you use `setTimeout`, the timer logic is handled by the browser's Timer API.

- **Callback and Message Queue:**
  - Once the asynchronous task is completed, a callback associated with that task is placed in the message queue.

- **Event Loop Check:**
  - The event loop continuously checks the message queue for tasks. If the call stack is empty, it takes the first task from the message queue and pushes it onto the call stack for execution.

- **Callback Execution:**
  - The callback, representing the completion of the asynchronous task, is executed on the main JavaScript thread.

`This collaboration allows JavaScript to handle time-consuming tasks asynchronously without blocking the main thread, ensuring that the user interface remains responsive. It's important to note that the event loop and Web APIs work together seamlessly to manage the flow of asynchronous code execution in the browser environment.`



In the context of the JavaScript event loop, the task queue is a crucial component that helps manage the order of execution for asynchronous tasks. Let's break down how the task queue fits into the overall event loop:

1. **Execution Phases:**
   - The JavaScript event loop has different phases, including the execution of synchronous code, handling timers and intervals, processing microtasks, and dealing with I/O events.

2. **Task Queue:**
   - The task queue is where callbacks of certain asynchronous operations are placed once they are completed. Asynchronous operations include things like `setTimeout`, user input events, and AJAX requests.

3. **Event Loop Iteration:**
   - During each iteration of the event loop, the JavaScript engine checks various queues to determine which tasks need to be executed.

4. **Message Queue and Task Queue:**
   - The terms "message queue" and "task queue" are often used interchangeably. The message queue can contain both "messages" (representing events like user input) and "tasks" (representing callbacks of completed asynchronous operations).

5. **Processing the Task Queue:**
   - When the call stack is empty (i.e., no synchronous code is currently running), the event loop looks at the task queue. If there are tasks in the task queue, it picks the first one and pushes it onto the call stack for execution.

6. **Order of Execution:**
   - Tasks in the task queue are processed in the order in which they were added. Older tasks have priority over newer ones, ensuring a first-in, first-out (FIFO) order.

Here's a simplified example to illustrate how the task queue works:

```javascript
console.log("Start of the program");

setTimeout(() => {
  console.log("Task 1: This will be executed later");
}, 2000);

console.log("Middle of the program");

setTimeout(() => {
  console.log("Task 2: This will be executed after Task 1");
}, 1000);

console.log("End of the program");
```

In this example, the `setTimeout` functions are asynchronous tasks. The callbacks for these tasks will be placed in the task queue after the specified delays. The order of execution ensures that the tasks are processed after the synchronous code has finished running.

Understanding the task queue is crucial for managing the flow of asynchronous code execution in JavaScript and ensuring that tasks are processed in a controlled manner.


## Task Queue

`In the context of the JavaScript event loop, the task queue is a crucial component that helps manage the order of execution for asynchronous tasks.` Let's break down how the task queue fits into the overall event loop:

1. **Execution Phases:**
   - The JavaScript event loop has different phases, including the execution of synchronous code, handling timers and intervals, processing microtasks, and dealing with I/O events.

2. **Task Queue:**
   - The task queue is where callbacks of certain asynchronous operations are placed once they are completed. Asynchronous operations include things like `setTimeout`, user input events, and AJAX requests.

3. **Event Loop Iteration:**
   - During each iteration of the event loop, the JavaScript engine checks various queues to determine which tasks need to be executed.

4. **Message Queue and Task Queue:**
   - The terms "message queue" and "task queue" are often used interchangeably. The message queue can contain both "messages" (representing events like user input) and "tasks" (representing callbacks of completed asynchronous operations).

5. **Processing the Task Queue:**
   - When the call stack is empty (i.e., no synchronous code is currently running), the event loop looks at the task queue. If there are tasks in the task queue, it picks the first one and pushes it onto the call stack for execution.

6. **Order of Execution:**
   - Tasks in the task queue are processed in the order in which they were added. Older tasks have priority over newer ones, ensuring a first-in, first-out (FIFO) order.

Here's a simplified example to illustrate how the task queue works:

```javascript
console.log("Start of the program");

setTimeout(() => {
  console.log("Task 1: This will be executed later");
}, 2000);

console.log("Middle of the program");

setTimeout(() => {
  console.log("Task 2: This will be executed after Task 1");
}, 1000);

console.log("End of the program");
```

In this example, the `setTimeout` functions are asynchronous tasks. The callbacks for these tasks will be placed in the task queue after the specified delays. The order of execution ensures that the tasks are processed after the synchronous code has finished running.

Understanding the task queue is crucial for managing the flow of asynchronous code execution in JavaScript and ensuring that tasks are processed in a controlled manner.


## Micro Task Queue 

`Micro Task Queue ia a  priority task queue which is only created for fetch `