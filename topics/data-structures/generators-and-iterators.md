## Generators

```javascript
  function* generateNumbers() {
    let i = 0;
    while (true) {
      i += 1;
      yield i;
    }
  }

  const numbers = generateNumbers();
  numbers.next() // { value: 0, done: false }
  numbers.next() // { value: 1, done: false }
  numbers.next() // { value: 2, done: false }
```
---

## Generator pattern

Using a regular closure instead of a state machine.

```javascript
  function generateNumbers() {
    let i = 0;
    return {
      next() {
        i += 1;
        return { value: i, done: false};
      }
    }
  }
```
---

## 2way channel

```javascript
  function* generateNumbers() {
    let number = 0;
    let increment = 1;
    while (true) {
      increment = (yield number) || 1;
      number += increment;
    }
  }

  const numbers = generateNumbers();
  numbers.next() // { value: 0, done: false }
  numbers.next(5) // { value: 5, done: false }
  numbers.next(5) // { value: 10, done: false }
```
---

## Iterators

```javascript
  const numbers = {
    [Symbol.iterator]() {
      return generateNumbers();
    }
  };

  for (let n of numbers) {
    console.log(n);
  }
```
---

## Links

- [Article about iterables](https://advancedweb.hu/2017/09/05/iterables_js/)
