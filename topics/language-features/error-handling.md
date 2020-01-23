# Error handling

---
## try/catch

```javascript
  try {
    null.doSomething();
  } catch (error) {
    console.log("null can't do anything");
  }
```

---
## throw

```javascript
  function sum(a, b) {
    if (!a || !b) {
      throw new Error('expected 2 arguments');
    }
  }

  sum(1); // throws the error
```
