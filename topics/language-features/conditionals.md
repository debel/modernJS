---
  title: Conditionals
---
# Conditionals

## comparators

```javascript
  a == b;
  a === b;

  a != b;
  a !== b;

  a > b;
  a >= b;

  a < b;
  a <= b;
```

## logical operators

```javascript
  a && b;
  a || b;
```

## if

```javascript
  if (condition) {

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
      break;
    default:
      doDefaultStuff();
  }
```

## pattern matching

```
  switch (expression) {
    case [a, b, ...c]:
    case { name, age }:
    default:
  }
```
