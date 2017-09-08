---
  title: Prototypes
---
# Prototypes

JavaScript implements a prototype-based inheritance model.
Each object has a special prototype field that points directly
to another object (NOT a class).

## The hidden link

An object literal has its prototype set to `Object.prototype`

```javascript
  Object.getPrototypeOf({ a: 1 }) === Object.prototype // true
  Object.getPrototypeOf([ 1, 2 ]) === Object.prototype // false
  Object.getPrototypeOf([ 1, 2 ]) === Array.prototype // true
  Object.getPrototypeOf(Array.prototype) === Object.prototype
  // true
```
`Object.getPrototypeOf` should not be used in applications

## Prototype chain

If a property is missing when looking for properties
(using the `.` or `[]` syntax), the engine will
search for it down the prototype chain.

## Objects without classes

## Runtime dynamic prototypes

Prototypes are alive! Changing the prototype changes what inheriting objects see.
```javascript
  const protoPerson = {
    sayHi() { return `Hi, I'm ${this.name}`}
  };

  // use can pass an object of property descriptors
  // similarly to Object.defineProperties
  const misho = Object.create(
    protoPerson, { name: { value: 'Misho' } }
  );
  misho.sayHi(); // "Hi, I'm Misho"

  protoPerson.sayHi = function () {
    return 'I forgot my name';
  };
  misho.sayHi(); // "I forgot my name"
```
