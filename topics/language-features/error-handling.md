---
title: Error handling
page: 1
---

# Error handling

## try/catch

```javascript
  try {
    null.doSomething();
  } catch (error) {
    console.log('null can\'t do shit');
  }
```

## throw

```javascript
  function sum(a, b) {
    if (!a || !b) {
      throw new Error('expected 2 arguments');
    }
  }

  sum(1); // throws an error
```
