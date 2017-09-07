---
  title: Maps and sets
---

# Sets

```javascript
 const uniqueNumbers = new Set();

 uniqueNumbers.add(1);
 uniqueNumbers.add(1);
 uniqueNumbers.add(2);
 uniqueNumbers.add(3);

 uniqueNumbers.delete(1);

 uniqueNumbers.has(5);
```


# Maps

```javascript

  const map = new Map();

  map.set('key', 'value');
  map.get('key');

  map.has('key');

  map.delete('key');

```

# Weak Sets / Weak Maps

These data structures are intended to prevent memory leaks. They do not hold references to the data they contain. Garbage collection can destroy data inside them.

As such, they are not iterable (they don't have a `forEach` method) and no `size` method.

# Weak Sets / Weak Maps

```javascript
  const reclamables = new WeakSet();
  let obj = {};

  reclamables.add(obj);
  reclamables.has(obj); // true

  obj = null;
  reclamables.has(obj); // false
```
