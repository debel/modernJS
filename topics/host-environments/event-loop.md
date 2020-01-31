# Event loop
![Event loop](/images/javascript_event_loop.png)
---

## Event loop
![Event loop](/images/event-loop.jpg)
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
The following code illustrates the order of execution.
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

## Blowing the stack

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
