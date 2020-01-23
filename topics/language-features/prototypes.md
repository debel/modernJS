# Prototypes

JavaScript implements a prototype-based inheritance model.
Each object has a special prototype field that points directly
to another object (NOT a class).
---

## The hidden link

- An object literal has its prototype set to `Object.prototype`
- An array literal has its prototype set to `Array.prototype`

```javascript
  Object.getPrototypeOf("string") === String.prototype // true
  Object.getPrototypeOf(12345678) === Number.prototype // true

  Object.getPrototypeOf({ a: 1 }) === Object.prototype // true
  Object.getPrototypeOf([ 1, 2 ]) === Object.prototype // false

  Object.getPrototypeOf([ 1, 2 ]) === Array.prototype // true
```
`Object.getPrototypeOf` should not be used in application code
---

## Prototype chain

```javascript
Object.getPrototypeOf([]) === Array.prototype
// true

Object.getPrototypeOf(Array.prototype) === Object.prototype
// true

Object.getPrototypeOf(Object.prototype)
// null
```
---

### Property access

- If a property is missing when using the `.` or `[]` syntax,
the engine will search for it down the prototype chain.
- Overwriting the value of a missing property, creates that property
on the target object, without modifying the prototype.

```javascript
  const a = { x: 50 };
  const b = Object.create(a);

  b.x // 50

  b.x = 100;
  a.x // 50
```
---

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
