# Numbers and Math

---
## The number type

All numbers in JavaScript are represented internally as 64-bit floating point

```javascript
  1 === 1.0 // true
```

---
## Number literals

There are multiple ways to denote a number literal

```javascript
  // hex literal
  10 === 0xa // true

  //octal literal
  10 === 0o12 // true

  //binary literal
  10 === 0b1010 // true

  // scientific notation
  1000 === 10e2 // true
```

---
## NaN

`NaN` stands for Not A Number and represents
a failure to perform a mathematical operation.
The result of any operation involving `NaN` will be `NaN`

```javascript
  typeof NaN // number

  5 - 'string' // NaN
  NaN + 1 // NaN

  NaN === NaN // false
  NaN !== NaN // true

  isNaN(NaN) // true
  isNaN("abc") // true

  Number.isNaN(NaN) // true
  Number.isNaN("abc") // false
```
Use `Number.isNaN` instead of `isNaN`

---
## Number Functions
---
### ParseInt

Prefer `Number.parseInt` to the global `parseInt` function

```javascript
  Number.parseInt("100", 2) // 4
  Number.parseInt("100", 10) // 100
  Number.parseInt("100", 16) // 256

  Number.parseInt("100abc101", 10) // 100
  Number.parseInt("abc", 10) // NaN
```
---
### ParseFloat

```javascript
  Numuber.parseFloat('3.14') // 3.14
```

---
### Safely comparing fractions

```javascript
  0.3 - (0.1 + 0.2) === 0 // false
  0.3 - (0.1 + 0.2) < Number.EPSILON // true
```

---
## Math functions

---
## Links

- [new number features in ES6](http://2ality.com/2015/04/numbers-math-es6.html)
