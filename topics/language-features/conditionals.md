---
title: Conditionals
page: 1
---
# Conditionals

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

## logical operators

```javascript
  a && b; // logical AND; short circuit, returns value (not Boolean)
  a || b; // logical OR; short circuit, returns value (not Boolean)

  // use AND to guard against null / undefined
  doSomething(myObject && myObject.myProperty);
  myObject && myObject.doSomething && myObject.doSomething();

  // use OR to set a default value
  sumNumbers(numbers || []);
  (myObject || defaultObject).doSomething();
```

## False-y values

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
-  `""` empty string

## if

```javascript
  if (condition) {

  // the following "else" forms are equivalent
  } else {
    if (check) {

    } else if (fallback) {

    }
  }
```

## ternary

```javascript
  const result = condition ? resultIfTrue : resultIfFalse;
```

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

## Pattern matching proposal

```javascript
  match (expression) {
    [a, b, ...c]: useArray(a, b, c)
    { name, age }: useObject(name, age)
    else: { throw new Error(); }
  }
```

## Links

- [Comparison table](https://dorey.github.io/JavaScript-Equality-Table/)
- [Pattern matching proposal](https://github.com/tc39/proposal-pattern-matching)
