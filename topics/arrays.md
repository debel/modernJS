# Arrays

Arrays are object with their prototype set to `Array.prototype`.

## Array literal

```javascript

  const colors = ['one', 2, { three: true }];

```

## Array methods

### push

```javascript
  array.push(newElement);
```

### pop

```javascript
  array.pop() // returns lastElement
```

### forEach

```javascript
  array.forEach((el) => doSomethingWith(el));
```

### filter

```javascript
  const evenOnly = [1, 2, 3, 4, 5].filter(number => number % 2);
```

### map

```javascript
  const doubled = [1, 2, 3, 4, 5].map(number => number * 2);
```

### reduce

```javascript
  const summed = [1, 2, 3, 4, 5].reduce((result, number) => result + number, 0);
```

### some

```javascript
  [1, 2, 3, 4, 5].some(number => number % 2); // returns true
```

### every

```javascript
  [1, 2, 3, 4, 5].some(number => number % 2); // returns false
```

### slice

```javascript
  const numbers = [1, 2, 3, 4, 5];
  numbers.slice(1,2); // returns [2];
```

### splice

```javascript
  const numbers = [1, 2, 3, 4, 5];
  const fourAndFive = numbers.splice(3, 2);
  // fourAndFive = [4, 5];
  // numbers = [1, 2, 3];
```

### join

```javascript
  ['hello', 'crazy', 'world'].join(' '); // returns "hello crazy world"
```

### concat

```javascript
  [1, 2, 3].concat([4, 5]); // returns [1, 2, 3, 4, 5]
```
