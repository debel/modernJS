# Loops
---
## Counting

```javascript
  let i = 5;
  while (i > 0) {
    doStuff();
  }

  for (let i = 0; i < 5; i += 1) {
    doStuff();
  }
```
---

## Variable binding

`var` is bound once
```javascript
  for (var i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 1000);
  }

  //logs: 5 5 5 5 5
```
---

`let` is rebound on each iteration of the loop
```javascript
  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 1000);
  }

  //logs: 1 2 3 4 5
```
---
## Enumeration

```javascript
  const array = ['a', 'b', 'c'];
  for (const index in array) {
    console.log(index); // 0, 1, 2
    console.log(array[index]); // 'a', 'b', 'c'
  }

  for (const item of array) {
    console.log(item); // 'a', 'b', 'c'
  }
```
---

## Recursion

```javascript
  function countdown(n) {
    console.log(n);
    if (n > 0) {
      countdown(n - 1);
    }
  }
```
---

## Scheduling

```javascript
  setInterval(
    () => { console.log('gets called each second'); },
    1000
  );

  const countdown = (n) => {
    console.log(n);
    if (n > 0) {
      setTimeout(
        () => countdown(n - 1),
        1000
      );
    }
  };
```

[See Event Loop](../../host-environments/event-loop/)
