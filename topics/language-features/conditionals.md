# Conditionals

---
## comparators

_Style guide: use strict comparisons_

```javascript
  a == b;
  a === b;

  a != b;
  a !== b;

  a > b;
  a >= b;

  a < b;
  a <= b;

  // there are no strict versions of > and <
```

---
## logical operators

```javascript
  // logical operators return values (not Booleans)
  a && b; // logical AND; short circuit
  a || b; // logical OR; short circuit

  // use AND to guard against null / undefined
  doSomething(myObject && myObject.myProperty);
  myObject && myObject.doSomething && myObject.doSomething();

  // use OR to set a default value
  sumNumbers(numbers || []);
  (myObject || defaultObject).doSomething();
```

---
## False-y values

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
-  `""` empty string

---
## if

```javascript
  if (condition) {
    // the following "else" forms are equivalent
  } else {
    if (check) {

    }
  } else if (fallback) {

  }
```

---
## ternary

```javascript
  const result = condition ? resultIfTrue : resultIfFalse;
```

---
## switch

```javascript
  switch (condition) {
    case value1:
      doStuff();
      break;
    case value2:
      doOtherStuff();
      evenMoreStuff();
      break;
    default:
      doDefaultStuff();
  }
```

---
## Pattern matching proposal

```javascript
  case (expression) {
    when [a, b, ...c] -> useArray(a, b, c)
    when { name, age } -> useObject(name, age)
    when _ -> { throw new Error(); }
  }
```
See [Pattern matching proposal](https://github.com/tc39/proposal-pattern-matching)
---

## Links

- [Comparison table](https://dorey.github.io/JavaScript-Equality-Table/)
