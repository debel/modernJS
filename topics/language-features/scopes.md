# Scopes
---

## Block scope

```javascript
  let i = 100;
  {
    var x = 5;
    let y = 10;
    const z = 15;
  }

  i // 100
  x // 5
  y // throws an Error
  z // throws an Error
```
---

## Function scope

```javascript
function f() {
  // var x is hoisted
  doSomeStuff(x); // x is undefined

  var x = 5;
  // but the assignment happens at the
  // original place in the code
}

// accessing x outside the function
x // throws an Error
```
---

## Lexical scope (Closure)

Functions hold a reference to the scope
they are defined in.

---
"Module" A:
```javascript
  const greeting = 'Hi';

  function person(name) {

    return {
      sayHi() {
        console.log(`${greeting}, I'm ${name}`);
      }
    }
  }
```

"Module" B:
```javascript
  person('Misho').sayHi();
  // Hi, I'm Misho
```
---

## Module scope

Modules create their own scopes.
Different module systems have different
implementation details.

```javascript
  // imports are immutable bindings
  import lib from 'myLib';

  // x is in the module scope
  let x = 5;

  // exports are immutable bindings
  // the value of x cannot be changed
  // from outside of the module
  export x;

  export function doStuff(arg) {
    // reassign x within the module
    x = lib.process(arg);

    return 'done';
  }
  ```
---

## Global scope

- In the browser the global scope is the window object.
```javascript
  window.anything
```
- In node.js modules scope shadows global scope
- the `global` object exposes the global scope
```javascript
  // module scope
  const x = 50;

  // implied globals are also in module scope
  y = 100;

  // create "true" globals
  // by assigning to the global object
  global.z = 200;
```
