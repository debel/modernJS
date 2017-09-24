---
  title: Scopes
---
# Scopes

## Block scope

```javascript
  {
    var x = 5;
    let y = 10;
    const z = 15;
  }

  x // 5
  y // throws an Error
  z // throws an Error
```

## Function scope

```javascript
function f() {
  var x = 5;

  // x is accessible everywhere in the function
}
```

## Lexical scope (Closure)

```javascript
  const greeting = 'Hi';

  function person(name) {

    return {
      introduce() {
        console.log(`${greeting}, I'm ${name}`);
      }
    }
  }

  // use it in another module
  person('Misho').introduce();
  // Hi, I'm Misho
```

## Module scope

Each module defines it's own scope.

```javascript
  import lib from 'myLib';

  // this variable is in module scope
  let x = 5;

  export x;

  export function doStuff(arg) {
    lib.process(arg);
    return 'done';
  }
  ```

## Global scope

- In the browser the global scope is the window object.
- In node.js modules scope shadows global scope
  - the `global` object exposes the global scope
