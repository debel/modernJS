# Language Structure
---

## Statements

Statements do not resolve to a value.

```javascript
  {} // code block statement
  var
  let
  const
  if () {} else {}
  for () { continue }
  while () { break }
  switch () { case }
  try { throw; } catch() {}
  function f() { return }
  class c {}
  import
  export
  debugger
```
---

## Expressions

Everything that is not a statement, is an expression.
Expressions resolve to a value

```javascript
  5 // a literal number expression;
  "use strict" // a string literal expression (pragma)
  {} // an object literal expression (SEE NEXT SLIDE)

  a + b // addition expression  
  a = 5 // assignment expression

  // the comma expression evaluates to
  // the result of the second expression
  console.log(message), message
```
---

## Statement position

begins at the start of a line or after a semi-colon `;`

```javascript
  5 // a number literal expression in statement position

  // code block statements containing one comma expression at statement position
  { 1, 2, 3 } // evaluates to 3
  // code block statements containing two labelled statements (label: expression)
  { x: 1; y: 2 } // evaluates to 2

  // BUT trying to create an object literal expression
  { x: 1, y: 2 } // this will throw an error!!

  // the variable declaration statement is hoisted
  // assignment expression of an object literal to a variable
  var point = { x:1 , y: 2 };

  // assignment of a code block to a variable
  var p2 = { x: 1; y: 2 } // this will throw an error
```
---

## Expression position

You cannot use a statement when an expression is expected

```javascript
  //"if" is a statement
  //the following code will throw an error:
  //function arguments are a list of expressions
  console.log(if (condition) { 5 } else { 12 });
  //the plus operator expects the form: expression + expression
  var z = 42 + if (condition) { 12 };

  //the ternary operator is an expression form of "if"
  console.log(condition ? 5 : 12);
  var z = 42 + condition ? 12 : 0;
```
---

## Reading JavaScript

```
console.log(message), message
```

- a comma expression `c1, c2` with:
  - `c1`: a function invocation expression `f(x)` with:
    - `f`: a property access expression `o.p` with:
      - `o`: the value of the `console` binding
      - `p`: the `"log"` string literal
    - `x`: the value of the `message` binding
  - `c2`: the value of the `message` binding
---

## Built-in objects

- [Boolean](../conditionals/)
- [Number](../numbers-and-math/)
- [String](../strings/)
- [Object](../objects/)
- [Array](../arrays/)
- [Function](../functions/)
- (and more)
---

## Host environments

Host environments can expand and modify
how the language behaves. They also inject global objects
e.g. `require` in node.js and `window` in the browser

[See Host environments](../../host-environments/)
---

## Useful Links

- [ESPrima Parser Demo](http://esprima.org/demo/parse.html)
- [MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
