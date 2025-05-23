# Node

- NodeJS is a JavaScript Runtime powered by V8 engine to run JavaScript on server
- NodeJS contain V8 engine and some super powers along with it.
- "**This**" Keyword in Node is just an empty object.
- Instead of **Window** object Node have **Global** Object.
- By **require()** method we can execute the code inside the file but we can not import the variable and functions inside them
- **Modules** by default prevent their functions and variables from leaking
- "**GlobalThis**" is a keyword used for accessing the global object of any javascript runtime(Node, Browser etc)

## CommonJS vs ES Modules (ESM)

| Feature        | CommonJS                            | ES Modules (ESM)                                     |
| -------------- | ----------------------------------- | ---------------------------------------------------- |
| Syntax         | Uses `require` and `module.exports` | Uses `import` and `export`                           |
| Loading        | Synchronous                         | Asynchronous                                         |
| Environment    | Default in Node.js (pre-ESM)        | Native in new frameworks like React & modern Node.js |
| File Extension | `.js` (default)                     | `.mjs` or with `"type": "module"`                    |
| Run Code       | `Non-Strict Mode                    | Strict Mode                                          |

- All the code of the module is wrapped inside a function(IIFE)
