# Functions
---

## Anatomy of a function

Functions are objects that inherit from `Function.prototype`.
To become a function, an object must implement
the `[[Call]]` and `[[Construct]]` internal methods.
---

Functions have a `declaration`, also called a `function signature` and a `body`.
The `declaration` contains an optional name and a list of parameters.
The body is a code block (ordered statements).
---

All functions can return a value through the `return` statement.
Arrow functions return the value of the last expression.
If no explicit value is specified, the `undefined` value is returned by default.

Executing a function creates a new internal `scope` object.
---

## Properties

```javascript
  // the number of parameters the function formally accepts
  f.length
```
---

## Statement vs expression form

Both forms define a function value and bind it to a variable with the given name.
But function statements are hoisted. The following two snippets of code are equivalent.

```javascript
  // a function statement, the name is mandatory
  function identity(parameter) {
    return parameter;
  }
```

```javascript
  // a function expression
  var identity = function identity(parameter) {
    return parameter;
  };
```
---

## Arrow functions

```javascript
  // single argument arrow function declaration
  // returns the value of the last (and only) expression
  const identity = id => id;

  // multiple parameters
  const add = (a, b) => a + b;

  // with a function body
  const validate = (input) => {
    if (input !== 'correct') {
      throw new Error('not correct');
    }
  };
```
---

## Methods

A method is a function which is assigned as a property of an object.

```javascript
  // es5
  var object = {
    method: function () { doStuff(); }
  };

  // es6
  const object = {
    method() { doStuff(); }
  };
```
---

### Calling context

When using dot notation to invoke a method e.g. `object.method()`
the value of `this` in the scope of the function execution
is assigned the `object` value.

```javascript
const getFullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
}

const person  = {
  firstName: 'John',
  lastName: 'Doe',
  getName: getFullName
};

person.getName(); // returns "John Doe"
```
---

### Arrows are not methods

Arrow functions used as methods have their `this` assigned to the `this` value of the outer scope.
Their `this` **is NOT** the object from their invocation.

```javascript
// this = undefined
const getFullName = () => `${this.firstName} ${this.lastName}`;

const person  = {
  firstName: 'John',
  lastName: 'Doe',
  getName: getFullName
};

person.getName(); // throws an error
```
---

## Lexical scopes

Functions have access to the scope containing their definition,
and it's parent scopes.

```javascript
function factory(factoryOptions) {
  const config = getConfig();

  return function instance(instanceOptions) {
    // this function can acces all of these:
    factoryOptions,
    instanceOptions,
    config
  };
}
```
---

## Execution context

The `apply` and `call` methods on `Function.prototype` allow us
to execute functions with explicitly set parameters and `this` value.

```javascript
  function f(x) { return x * (this.y + this.z); }
  const useAsThis = { y:1, z: 2 };
  const parameter1 = 5;

   // executes the function with context as the "this" argument
  f.call(useAsThis, parameter1, parameter2);

  // executes the function with context as the "this" argument
  f.apply(useAsThis, [parameter1, parameter2]);
```
---

## Patterns
---

### IEFE

This pattern is going out of style due to proper module semantics
in the new versions of JavaScript

```javascript
// the IEFE pattern:
// declare a function and execute it immediately
(function () {
  var data = getData();
  superCoolLibrary.render(data);
}());
```
---

### Pseudo-modules

This pattern is going out of style due to proper module semantics
in the new versions of JavaScript

```javascript
// this is an old module pattern:
// assign the result of an IEFE to a variable
// variables in the IEFE's scope are private to the module
var myModule = (function () {
  var privateVar = 'private';

  return {
    publicMethod() {
      return privateVar;
    }
  };
}());

myModule.publicMethod(); // "private"
myModule.privateVar // undefined
```
---

### Higher Order Functions

Higher order functions are the bread and butter of functional programming

```javascript  
  array.filter(element => isValid(element));

  setTimeout(function () {
    console.log("this is a callback");
  }, 1000);

  http.createServer((request, response) => {
    response.send('hello world!');
  });
```
---

### Currying

```javascript
  // Currying
  function name(family) {
    return function (personal) {
      return `${personal} ${family}`;
    }
  }
  // with an arrow function
  const name = family => personal => `${personal} ${family}`;

  // usage
  const simpson = name('Simpson');
  const homer = simpson('Homer');
  const marge = simpson('Marge');
  const bart = name('Simpson')('Bart');
```
---

### Bind
```javascript
  function name(family, personal) {
    return `${personal} ${family}`;
  }

  const magy = name('Simpson', 'Magy');

  // bind returns a new function
  // first argument will be used for "this"
  const simpson = func.bind(null, 'Simpson');

  const lisa = simpson('Lisa');
```
---

## Links

- [Factory functions patterns](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
- [the Y combinator function](https://dev.to/simov/anonymous-recursion-in-javascript)
