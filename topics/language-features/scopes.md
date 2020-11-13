# Scopes
Execution context - the context in which values and expressions are "visible" or can be referenced.
---

## Block scope

```javascript
  let i = 100;
  {
    var x = 5; // hoisted
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
  // but the assignment happens at the original place in the code
}

// accessing x outside the function
x // throws an Error
```
---

## Module scope

Modules create their own scopes.

```javascript
  // imports are immutable bindings
  import lib from 'myLib';

  // x is in the module scope
  let x = 5;

  // exports are immutable bindings
  // the value of x cannot be changed from outside of the module
  export x;

  export function doStuff(arg) {
    // reassign x within the module
    x = lib.use(arg);

    return 'done';
  }
  ```
---

## Global scope

In the browser the global scope is the `window` object.

```javascript
  // any variable defined without using var, let or const
  // gets attached to the global object
  myGlobalVar = 5;

  window.myGlobalVar // 5
```
---

## Global scope

In node.js modules scope shadows global scope.
The `global` object exposes the global scope

```javascript
  // implied globals are in module scope
  y = 100;

  // create globals by assigning to the global object
  // these will be accessible from any module through global
  global.z = 200;
```
---

## Lexical scope (Closure)

Functions have access to the scope
they are defined in.

---
Module A:
```javascript
  const greeting = 'Hello!'; // module scope

  export function SayHi() {
    console.log(greeting);
  }
```

Module B:
```javascript
  import { sayHi } from './moduleA';
  
  sayHi(); // Hello!
```
---

## Scopes

![Scopes](/images/scopes.jpg)
