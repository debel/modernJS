---
title: Variables
page: 1
rank: 3
---
# Variables

## Declaration

```javascript
  aGlobalVar = 'a global variable';

  var funcVar = 'a function variable';

  let blockVar = 'a block variable';

  const blockImmutable = 'an immutable block variable';
```

See [Scopes](../scopes/)

## Destructuring

```javascript
  const [x, y] = [1, 2];
  // x = 1, y = 2

  let { height } = { height: 1.83 };
  // height = 1.83

  const { dog: { name: dogName } } = { dog: { name: 'Barsa' } };
  // dogName = 'Barsa'
```

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

## Temporal Dead Zone (TDZ)

You cannot use `let` and `const` variable
before where they are declared in the code.

```javascript
  console.log(a); // throws an TDZ error

  let a = 5;
```

## Bindings and references

Variables cannot reference other variables, only values.

```javascript
  let s = "hello";
  let z = s;
  // reassignment
  z += " world";
  console.log(s); // "hello"

  const myObj = { msg: 'hello' };
  const aRef = myObj;
  // references the same object
  aRef.msg += ' world';
  console.log(myObj.msg) // 'hello world'
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
  var x = 5; var y = 10;
  swap(x, y); // does nothing
  console.log(x, y); // 5, 10
```

```javascript
  function swapInObject(obj) {
    var z = obj.x;
    obj.x = obj.y; obj.y = z;
  }
  var myObj = { x: 5, y: 10 };
  swapInObject(myObj);
  console.log(myObj); // { x: 10, y: 5 }
```
