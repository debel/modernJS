# Arrays

Arrays are objects with their prototype set to `Array.prototype`
---

## Array literals

```javascript
  const emptyArray = [];
  const anyValues = ['one', 2, { three: true }];
```

Notice each array literal is a distinct object

```javascript
  [] === [] // false
  [1, 2, 3] === [1, 2, 3] // false
```
---

## Array length
The length property contains the largest index of the array plus one.
```javascript
  const arr = [];
  arr.length // 0

  arr[5] = 'hello';
  arr.length // 6

  arr // 5 empty slots, 'hello'
```
---

## Checking if something is an array
```javascript
  const arr = [];

  // the typeof operator has no notion of arrays
  typeof arr // "object"

  // use Array.isArray instead
  Array.isArray(arr) // true
```
---

## Array methods
There a lot of useful methods that arrays inherit from `Array.prototype`.
---

### push
Add an element to the end of an array.
```javascript
  array.push(newElement);
```

### pop
Remove and return the last element of the array
```javascript
  let lastElement = array.pop();
```
---

### join
Returns a string combining all elements with the given delimiter.
```javascript
  ['hello', 'crazy', 'world'].join('! ');
  // returns "hello! crazy! world"
```

### concat
Retruns a new array containing all the given values.
```javascript
  [1, 2, 3].concat([4, 5]); // returns [1, 2, 3, 4, 5]
```
---

### slice
Return a copy of a sub array,
starting from the given index and having the given length
```javascript
  const numbers = [1, 2, 3, 4, 5];
  numbers.slice(0,2); // returns [1, 2];
```

### splice
Modifies the given array:
adding, removing or replacing elements
```javascript
  const numbers = [1, 2, 3, 4, 5];
  const fourAndFive = numbers.splice(3, 2);
  // fourAndFive = [4, 5];
  // numbers = [1, 2, 3];
```
---

### forEach
Execute the given function on each element of the array.
```javascript
  array.forEach((el) => console.log(el));
```

### filter
Apply the given function to each element of the array.
If the function returns true, the value is added to the new results array.
```javascript
  const evenOnly = [1, 2, 3, 4, 5].filter(number => number % 2);
```
---

### map
Returns an array of the result of applying
the given function to each element of the array.
```javascript
  const doubled = [1, 2, 3, 4, 5].map(number => number * 2);
  // returns [2, 4, 6, 8, 10]
```

### reduce
Accumulate a result by applying the given function to each element.
```javascript
  const summed = [1, 2, 3, 4, 5]
    .reduce((result, number) => result + number, 0); // 15
```
---

### some
Returns true if any of the elements satisfy the condition function
```javascript
[1, 2, 3, 4, 5].some(number => number % 2); // returns true
```

### every
Returns true if all the elements satisfy the predicate
```javascript
[1, 2, 3, 4, 5].some(number => number % 2); // returns false
```
---
### flat
Returns a new array containing the contents of the sub-arrays
```javascript
[[1,2], [3,4]].flat() // returns [1, 2, 3, 4]
```
### flatMap
Combines the flat and map functions - applies the callback to each sub-array
```javascript
[[1,2], [3,4]].flatMap(subArray => sum(subArray)) // returns [3, 7]
```
