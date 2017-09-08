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

## Pattern matching proposal

```javascript
  match (expression) {
    [a, b, ...c]: use(a, b, c)
    { name, age }: use(name, age)
    else: { throw new Error(); }
  }
```

## Links

- [Comparison table](https://dorey.github.io/JavaScript-Equality-Table/)
- [Pattern matching proposal](https://github.com/tc39/proposal-pattern-matching)
