# NodeJS

- server side javascript environment
- runs on top of google V8 and libUV
- offers many capabilities
---

## CommonJS Modules

Defining modules
```javascript
  // module exports can be any type of value:  
  module.exports = { doStuff() }; // - objects
  module.exports = function (options) {} // - function

  // by default module.exports is set to an empty object
  module.exports // {}
```
---

## CommonJS Modules

Using modules:
```javascript
  // built-in or npm installed
  const lib = require('lib');

  // local file
  const myLib = require('./myLib');
```
---

## Built-in modules

- process
- fs
- http
- [and many more](https://nodejs.org/api)

---

## Process

- The process module provides:
- access to environment variables
- access to command line arguments
- access to build-time node and v8 flags
- messaging with other processes
- handling process level events

---
### Environment variables

```javascript
  process.env
  // returns an object holding all environment variables

  process.env.MY_VAR // read the value of MY_VAR

  process.env.MY_VAR = 'new value';
  // the new value is not reflected outside of the process
```
---

### Reading process arguments

```bash
  node script.js param1 param2=value
```

```javascript
  process.argv.forEach(
    (index, value) => console.log(`${index}: ${value}`);
  );
  /*
    0: /path/to/node
    1: /path/to/script.js
    2: param1
    3: param2=value
  */
```
---

## FS

- `fs` provides file system capabilities:
- reading and writing to files, sockets and buffers
- reading and changing file permissions and stats
- creating and deleting directories and links
---

### File Stats

```javascript
  fs.stat('poem.txt', (error, data) => {
    if (error) {
      return console.error(error);
    }

    data.isFile() // true
    data.isDirectory() // false
    data.size // 311 (bytes)
  });
```
---

### Reading a file

```javascript
  const fs = require('fs');

  fs.readFile('./poem.txt', (error, file) => {
    if (error) {
      return console.error('you didn\'t write a poem');
    }

    console.log(file.contents);
  });
```
---

### Writing a file

```javascript
  const fs = require('fs');

  fs.writeFile(
    'file.name',
    'content',
    (error) => console.error(error)
  );
```
---

## HTTP / HTTPS

- provides HTTP networking capabilities:
- making requests
- creating servers
---

### Making an http request (http)

```javascript
  const http = require('http');
  http.request("https://google.com", (res) => {
    res.on('error', error => console.error(error.message));

    const buffer = [];
    res.on('data', data => buffer.push(data));

    res.on('end', () => console.log(buffer));
  }).end();
```
---

### Creating a server (http)

```javascript
  const http = require('http');

  const server = http.createServer(
    (req, res) => res.end('hello world!')
  );

  server.listen(7212);
```
---

### Streams

See [Streams](../../data-structures/streams/)

---

## NPM modules

See [npm](../../development-tools/npm/)

---

## Express JS

See [express](../../frameworks-and-libraries/express/)

---

## using APIs

```javascript
  const fetch = require('node-fetch');

  fetch('https://api.github.com/orgs/modern-js/members')
    .then(response => response.ok ?
      response.json() : Promise.reject())
    .then(members => Promise.all(
      members.map(member => fetch(member.url))
    ));
```
---

## using databases

## using amqp / kafka

---
## Links

- [NodeJS language support](http://node.green/)
- [List of nodeJS libraries](https://github.com/sindresorhus/awesome-nodejs)
- [HTTP/2 article](https://blog.risingstack.com/node-js-http-2-push/)
