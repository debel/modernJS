# Functions

## Anatomy of a function

Functions are objects that inherit from `Function.prototype`.
To become a function, an object must implement
the `[[Call]]` and `[[Construct]]` internal methods.

Functions have a `declaration`, also called a `function signature` and a `body`.
The `declaration` contains an optional name and a list of parameters.
The body is a code block (ordered statements).

All functions can return a value through the `return` statement.
Arrow functions return the value of the last expression.
If no explicit value is specified, the `undefined` value is returned by default.

Executing a function creates a new `scope`.

## Function statement vs function expression

Defines a function value and binds it to a variable with the given name.
The following two snippets of code are equivalent.

```javascript
  // a function statement, the name is mandatory
  function identity(parameter) {
    return parameter;
  }
```

```javascript
  // a function expression
  var identity = function (parameter) {
    return parameter;
  };
```

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

## Lexical scopes

Functions have access to the scope containing their definition,
and it's parent scopes.

```javascript

function factory(factoryOptions) {
  const config = getConfig();

  return function instance(instanceOptions) {
    factoryOptions 
    instanceOptions
    config
  };
}

const

```

## Execution context

Functions are provided with dynamic / execution-time data via the explicit parameters,
as well as the the `this` parameter and the `arguments` meta-array.

```javascript
  function f() { return this.x + this.y; }
  const context = { x:1, y: 2 };
  f.call(context, parameters); // executes the function with context as the "this" argument
  f.apply(context, [parameters]); // executes the function with context as the "this" argument

```
Each function creates its own scope,
with the "this" parameter set either to the global object or undefined.

Arrow functions bind to the outer `this`.

```javascript

  const context = {
    anwser: 42,
    getAnswerMethod() {
      return this.answer;
    },
    getAnswerArrow: () => {
      return this.answer;  
    }
  }

  context.getAnswerMethod(); //42
  context.getAnswerArrow(); //throws an error
```

## Popular patterns

```javascript
  // Currying
  function a() {
    return function b() {}
  }

```

```javascript
  // Callbacks
  setTimeout(function () {
    console.log("this is a callback");
  }, 1000);
```


```javascript
  // the IEFE pattern: declare a function and execute it immediately
  (function () {
    var data = getData();
    superCoolLibrary.render(data);
  }());

// the module pattern: assign the result of an IEFE to a variable
// variables in the IEFE's scope are private to the module
(function () {
  var privateVar = 'private';

  return {
    publicMethod() {
      return privateVar;
    }
  };
}());
```

## Properties and methods

```javascript

  f.bind(context, parameters); // returns a new function with the "this" argument pre-set to context

  f.length // the number of parameters the function formally accepts

```
