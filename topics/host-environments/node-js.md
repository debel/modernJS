---
  title: NodeJS
---

# NodeJS

## Built-in modules

### http

```javascript
  import { createServer } from 'http';

  const server = createServer(
    (req, res) => res.end('hello world!')
  );

  server.listen(7212);
```

### fs

```javascript
  import fs from 'fs';

  fs.readFile('./poem.txt', (error, file) => {
    if (error) {
      return console.error('you didn\'t write a poem');
    }

    console.log(file.contents);
  });
```

### streams

See [Streams](../../data-structures/streams/)

## NPM modules

See [npm](../../development-tools/npm/)

## Express JS

See [express](../../frameworks-and-libraries/express/)

## using APIs

```javascript
  import fetch from 'node-fetch';

  fetch('https://api.github.com/orgs/modern-js/members')
    .then(response => response.ok ?
      response.json() : Promise.reject())
    .then(members => members.map(member => fetch(member.url)))
```

## using databases

## using amqp / kafka

## Links

- [NodeJS language support](http://node.green/)
- [List of nodeJS libraries](https://github.com/sindresorhus/awesome-nodejs)
- [HTTP/2 article](https://blog.risingstack.com/node-js-http-2-push/)
