# Types

- Variables don't have types.
- Values have types.

---
## Primitive types

- boolean
- string
- number
- symbol
- null
- undefined

---
## Complex types

- object
  - function
    - class
  - array
  - regex
- _(all complex types are objects)_


---
## The `typeof` operator

```javascript
typeof 'abc' // "string"
typeof 123 // "number"
typeof 1.23 // "number"
typeof NaN // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof function () {} // "function"
typeof null // "object"
typeof [] // "object"
```

You should avoid relying on `typeof`
in your application code.

---
## Methods and properties of literals

They inherit properties and methods
from their respective prototypes.

```javascript
  "hello".length // 4
  "hello".split('') // ['h', 'e', 'l', 'l', 'o']

  1..toString() // "1"
  3.14.toString() // "3.14"

  ({ x: 1 }.x) // 1
  [1, 2, 3].length // 2
```

---
## References

Primitive values are immutable and only create a single instance per value.

```javascript
  var x = 5; var y = 5;
  x === y // true

  var s = "ab"; var z = "ab";
  s === z // true
```

### Each object is a separate instance

```javascript
  var x = new Number(2);
  var y = new Number(2);
  x === y // false

  [] === [] // false
  [1, 2, 3] === [1, 2, 3] // false

  {} === {} // false
  { x: 1 } === { x: 1 } // false
```

---
## Values and prototypes

```javascript
  String.prototype.isPrototypeOf("abc") // true

  Number.prototype.isPrototypeOf(3.14) // true
  Number.prototype.isPrototypeOf(NaN) // true

  RegExp.prototype.isPrototypeOf(/(\d+)/) // true
```

---
## JIT Optimization

Internally JavaScript engines track the type of the arguments
passed to every function call in order to optimize performance.


---
## Links

- [Primitive types vs Objects](http://blog.brew.com.hk/not-everything-in-javascript-is-an-object/)
