# Objects
Objects are collections of properties
---

## Creating Objects

- `{} /* object literal */`
- `new Constructor()`
- `Object.create(prototype)`
- `Factory pattern`
---


### Anatomy of an object literal
Object literals are composed of a series of `key`:`value` pairs.
All keys of an object are converted to strings.

```javascript
// an object literal
const person = {
  'age': 33,
  name: 'Misho', // the name key is a string, same as age
  'favorite game': 'Race for the Galaxy'
};
```

---

### Object literals

ES6 introduces a new property shorthand.
Here the value of the `hobby` variable is assigned
to the `hobby` property of the `person` object.

```javascript
  const hobby = 'juggling';
  const person = {
    hobby
    name: 'Misho',
    age: 30,
  };
```

---

### Accessing object properties
There a 2 ways to access the value of an object property:
- using the `.` infix operator
- using the `[]` postfix operator

```javascript
  person.name // returns "Misho"
  person['name'] // returns "Misho"

  // might throw an error if a variable called name is not defined
  person[name]
```

---

### The new operator

The `constructor` function sets the properties of the new object.

```javascript
  //constructor function
  function Rect(a,b) {
    this.a = a;
    this.b = b;
  }

  const rect1 = new Rect(5, 6);
  rect1.a; // 5
  rect1.b; // 6
```
---

### Object.create

Creates objects with the specified prototype.
```javascript
  const rect1 = Object.create();
  rect1.a = 5;
  rect1.b = 6;
```
---

## Methods

A method is a function that is assigned to a property of an object.
ES6 introduces a new shorthand for defining methods.
In the below example `es5Method` and `es6Method` are equivalent.

```javascript
  const object = {
    es5Method: function () {},
    es6Method() {},
    arrowNotAMethod: () => {}
  }
```
---

## Dynamic property names

ES6 introduces dynamic property keys using bracket `[]` syntax.
*Remember:* all object keys are strings

```javascript
  const getC = () => 'c';
  const object = {
    a: 1,
    'b': 2,
    [getC()]: 3,
  }
```
---

### Property descriptors

Object properties have some special flags:
- configurable: can the property be removed?
- enumerable: is the property listed?
- writable: can the value of the property be changed?

---

### Property descriptors

```javascript
  Object.getOwnPropertyDescriptors(
    { id: '1', data: 'nom nom'}
  );
  // returns:
  {
    id: {
      value: '1',
      configurable: true,
      enumerable: true,
      writable: true
    }, //...
  }
```
---

### Defining properties with flags

You can set these special flags when defining properties.
```javascript
  Object.defineProperty(
    myObject, 'newKey', { writable: false, value: 42 }
  );

  Object.defineProperties(
    myObject,
    {
      'newKey_1': { enumerable: false, value: 'unlisted' },
      'newKey_2': { configurable: false, value: 'here to stay'}
    }
  );
```
---

### Getters and Setters

Properties can execute a `get` function when the property is accessed and a `set` function when it is assigned a value.

```javascript
  const thermometer = Object.defineProperty(
    { c: 22 }, 'f', {
      get() { return this.c * 1.8 + 32; },
      set(v) { this.c = (v - 32) / 1.8 }
    });

  thermometer.f // 71.6
  thermometer.f = 100
  thermometer.c // 37.7
```

---
## The Object object

`Object` (with a capital O) is a special global object. It has many useful methods and properties.

---
## Object.keys / Object.values()

Get an array of the names of all _enumerable_ properties of an object.

```javascript
  const propertyNames = Object.keys(myObject); // ['name', 'age', 'hobby']
```

Get an array of the values of the _enumerable_ properties of an object.
```javascript
  const propertyValues = Object.values(myObject); // ['Misho', 33, 'juggling'] 
```
---

### Object.assign()

Creates a new object containing all the _enumerable_ properties of the
given objects (later objects override repeating keys).

```javascript
  const fullData = Object.assign({}, defaultData, userData);

  // alternatively use the object spread operator
  const fullData = { ...defaultData, ...userData };
```
---

### Object.preventExtensions()

Disallow adding new properties to an object.

```javascript
  const pointA = Object.preventExtensions({ x: 0, y: 0 });
  pointA.x = 15; // no problem
  pointA.z = 0; // throws an error
  delete pointA.y; // success, but now it's a 1d point...
```
---

### Object.seal()

Disallow adding or removing properties.
```javascript
  const pointB = Object.seal({ x: 0, y: 0 });
  pointB.x = 15; // no problem
  pointB.z = 0; // throws an error
  delete pointB.y; // throws an error
```
---

### Object.freeze()

Make an object immutable.
Disallow adding / removing properties,
or changing their values.

```javascript
  const pointC = Object.freeze({ x: 0, y: 0 });
  pointC.x = 15; // throws an error
  pointC.z = 0; // throws an error
  delete pointC.y; // throws an error
```
---

### Inspect an object

There are corresponding functions that check if an object is frozen, sealed
or has disabled extensions.
```javascript
  Object.isExtensible(pointA) // false
  Object.isExtensible(pointB) // false
  Object.isExtensible(pointC) // false

  Object.isSealed(pointA) // false
  Object.isSealed(pointB) // true
  Object.isSealed(pointC) // true

  Object.isFrozen(pointA) // false
  Object.isFrozen(pointB) // false
  Object.isFrozen(pointC) // true
```
---

## Patterns
---

### Factory function

```javascript
  function createTaxi(car, driver) {
    // use any object creation technique
    const taxi = {
      car,
      driver,
      meter: new Meter()
    };

    car.on('start', taxi.meter.start);
    car.on('stop', taxi.meter.stop);

    return taxi;
  }
```
---

### Dictionary / Lookup
```javascript
  const translations = {
    en: 'Hello',
    bg: 'Здравейте'
  };

  const sayHi = (lang) => (
    translations[lang] || translations['en']
  );
```
---

## Prototypical inheritance

See [Prototypes](../prototypes/)
