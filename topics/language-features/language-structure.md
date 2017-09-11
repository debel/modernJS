---
title: Structure and Grammar
page: 1
---
# Language Structure

## Statements

Statements do not resolve to a value.

```javascript
  {} // code block statement

  function f() { return } / class c {}

  import / export

  var / let / const

  for () { continue } / while () { break }

  if () {} else {} / switch () { case }

  try { throw; } catch() {}

  debugger
```

## Expressions

Everything that is not a statement, is an expression.
Expressions resolve to a value

```javascript
  5 // a literal number expression;
  "use strict" // a literal string expression (pragma)
  {} // an object literal expression (SEE NEXT SLIDE)

  a + b // addition expression

  a = 5 // assignment expression
```

## Statement position

A new statement usually begins
at the start of a line (except for special cases)
or after a semi-colon `;`

```javascript
  5 // a number literal expression in statement position

  { 1, 2, 3 } // code block containing 3 statements
  { x: 1; y: 2 } // code block with labelled statements

  // trying to create an object literal expression
  { x: 1, y: 2 } // this will throw an error!!

  // the variable declaration statement is hoisted
  // assignment expression of an object literal to a variable
  var point = { x:1 , y: 2 };

  // assignment of a code block to a variable
  var p2 = { x: 1; y: 2 } // this will throw an error
```

## Expression position

You cannot use a statement if an expression is expected
```javascript
  //"if" is a statement
  //the following code will throw an error:
  console.log(if (condition) { 5 } else { 12 });
  var z = 42 + if (condition) { 12 };

  //the ternary operator is an expression form of "if"
  console.log(condition ? 5 : 12);
  var z = 42 + condition ? 12 : 0;
```

## Built-in objects

- [Boolean](../conditionals/)
- [Number](../numbers-and-math/)
- [String](../strings/)
- [Object](../objects/)
- [Array](../arrays/)
- [Function](../functions/)
- (and more)

## Host environments

Host environments also inject global objects.
e.g. `require` in node.js and `window` in the browser

[Host environments](../../host-environments/)

## Links

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
