# Event loop
- Event-driven
- Single-threaded
- Non-blocking
---

## The JS runtime (simplified)

![JS Runtime](/images/js-runtime.png)
---

### Blowing the stack

Chaining too many function calls can lead
to exceeding the size of the call stack.
The following code will eventually throw an error.

```javascript
  let b;
  const a = { exec() { b.exec(); } };
  b = { exec() { a.exec(); } };

  a.exec();
  // a calls b calls a calls b
  // calls a calls b etc..
```
---

## Event loop

All JS code is executed on the event loop.

It is not part of the language, but rather provided by the Host Environment.
---

## Concurrency vs Parallelism
![Event loop](/images/concurrent_vs_parallel.png)
---

## Timers

`setTimeout` allow us to execute an action
after (at least) the set period of time.

```javascript
  const timeout = setTimeout(function action() {}, milliseconds);
  // returns a timeout id that can be used to cancel the timer
  clearTimeout(timeout);
```
---

## Timers

`setInterval` allows us to schedule an action to be executed
periodically after at a given interval

```javascript
  const interval = setInterval(function () {}, milliseconds);
  // returns an interval id that can be used to cancel the timer
  clearInterval(interval);
```

---
## Microtasks
Promises are resolved at the end of the current event loop task.
```javascript
  // add the given action at the end of the event queue
  setTimeout(() => console.log('third'), 0);

  // resolve q promise and attach a handler
  Promise.resolve('second').then(console.log);

  // execute some synchronous code
  console.log('first');

  // first, second, third
```

---
## Browser animation
- The browser calls your function when it's ready to redraw the screen.
- Optimized for both performance and power usage.

```javascript
  window.requestAnimationFrame(
    function draw() {
      // ideally called around 60 times a second
    }
  );
```

---
## Task Queues
![Node event loop](/images/event-loop-queues.png)

---

## Event Loop structure
The structure of the event loop is different between the browsers and node.js

---
## Browser Event Loop

![Browser event loop](/images/browser-event-loop.png)
---

## Node.js Event Loop

![Node event loop](/images/node-event-loop-phases.png)
---

## Blocking the event loop

If the current task falls into an infinite loop
later tasks on the event queue will not be processed  

```javascript
  const longSyncTask = () => {
    while (true) {}
  };

  longSyncTask();
```
---

## Chunking work on the event loop

Split a long / heavy computation into
multiple tasks on the event queue.
Thus allowing the engine to process
other events in between.

```javascript
  const longAsyncTask = () => {
    const workChuncks = [];
    while (workChunks.length > 0) {
      // get the last chunk
      const nextTask = workChunks.pop();

      // reverse using timeouts
      setTimeout(nextTask, workChunks.length * deleyInMs);
    }
  }
```
