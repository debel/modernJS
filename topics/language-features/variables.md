---
title: Variables
page: 1
---
# Variables

## Declaration

```javascript
  aGlobalVar = 'global';

  var funcVar = 'function';

  let blockVar = 'block';

  const blockImmutable = 'block immutable';
```

## Temporal Dead Zone (TDZ)

```javascript
  console.log(a); // undefined

  var a = 5;
```

Use cannot use `let` and `const` variable
before where they are declared in the code.

```javascript
  console.log(a); // throws an TDZ error

  let a = 5;
```

## Scope

See [Scope](../scopes/)

### Hoisting

`var` declarations are hoisted to the top of the scope.
The assignment remains at the same point in the code.

```javascript
  function sayHi() {
    console.log(hello);
    var hello = 'hi';
  }

  sayHi() // undefined;

  // the above code is equivalent to:
  function sayHi() {
    var hello = undefined;
    console.log(hello);
    hello = 'hi';
  }
```

## Destructing

```javascript
  const [x, y] = [1, 2];
  // x = 1, y = 2

  let { height } = { height: 1.83 };
  // height = 1.83

  const { dog: { name: dogName } } = { dog: { name: 'Barsa' } };
  // dogName = 'Barsa'
```

## Bindings and references

Variables cannot reference other variables, only values.

```javascript
  var x = 5;
  var y = x;
  x += 1;
  console.log(y); // 5

  var s = "hello";
  var z = s;
  z += " world";
  console.log(s); // "hello"
```

## Parameters and Values

Parameters are passed by value.
The receiving function cannot change
the bindings of the calling context.

```javascript
  function swap(x, y) {
    var z = x;
    x = y; y = z;
  }

  var x = 5; var y = 6;

  swap(x, y);

  x // 5
  y // 6
```
