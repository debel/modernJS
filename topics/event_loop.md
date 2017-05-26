# Event loop

## Timers

```javascript
  const timeout = setTimeout(function () {}, milliseconds);
  clearTimeout(timeout);

  const interval = setInterval(function () {}, milliseconds);
  clearInterval(interval);

```

## Promises

Microtasks

```javascript
  setTimeout(() => console.log('third'), 0);
  Promise.resolve('second').then(console.log);
  console.log('first');
```

## Scheduling
