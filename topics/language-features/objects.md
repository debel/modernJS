---
  title: Objects
---
# Objects

In JavaScript an object is just a bag of properties.

## Creating Objects

- `{} /* object literal */`
- `new Constructor()`
- `Object.create(prototype)`
- `Factory pattern`

## Object literals

ES6 introduces a new property shorthand.
In the example below, the `hobby` variable is used
as a property of the `person` object.

```javascript
  const hobby = 'juggling';
  const person = {
    hobby
    name: 'Misho',
    age: 30,
  };
```

## Methods

A method is a function that is used as a property of an object.

ES6 introduces a new shorthand for defining methods.
In the below example `es5Method` and `es5Method` are equivalent.
However `notAMethod` is different because of its `this` argument.
```javascript
  const object = {
    es5Method: function () {},
    es5Method() {},
    notAMethod: () => {}
  }
```

## Properties

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

Properties are themselves objects with special flags.
- configurable: property cannot be removed
- enumerable: property is not listed
- writable: the property's value cannot be changed
```javascript
  Object.getOwnPropertyDescriptors({ id: '1', data: 'nom nom'});
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

You can set these special flags when defining properties.
```javascript
  Object.defineProperty(myObject, 'newKey', { writable: false, value: 42 });
  Object.defineProperties(myObject, {
    'newKey_1': { enumerable: false, value: 'kind of hidden' },
    'newKey_2': { configurable: false, value: 'can\'t delete this'}
  });
```

### Getters and Setters

Properties that execute a `get` function when the property is accessed and a `set` function when it is assigned a value.

*Anti-Pattern* This should be used carefully. It creates side effects that are hard to detect and reason about.
```javascript
  const thermometer = Object.defineProperty({ c: 22 }, 'f', {
    get() { return this.c * 1.8 + 32; },
    set(v) { this.c = (v - 32) / 1.8 }
  });

  thermometer.f // 71.6
  thermometer.f = 100
  thermometer.c // 37.7
```

## The Object object

`Object` has many useful methods and properties.

Get an array of the names of all enumerable properties of an object.
```javascript
  const myProperties = Object.keys(myObject);
```

Get an array of the values of the properties of an object.
```javascript
  const myValues = Object.values(myValues);
```

Creates a new object containing all the properties of the
`defaultData` and `userData` objects (users override defaults).
```javascript
  const fullData = Object.assign({}, defaultData, userData);

  // alternatively use the object spread draft specification
  const fullData = { ...defaultData, ...userData };
```

Objects also have special flags attached to them.

Disallow adding new properties to an object.
```javascript
  const pointA = Object.preventExtensions({ x: 0, y: 0 });
  pointA.x = 15; // no problem
  pointA.z = 0; // throws or fails silently
  delete pointA.y; // success, but now it's a 1d point...
```

Disallow removing properties.
```javascript
  const pointB = Object.seal({ x: 0, y: 0 });
  pointB.x = 15; // no problem
  pointB.z = 0; // throws or fails silently
  delete pointB.y; // throws or fails silently
```

Make an object immutable.
```javascript
  const pointC = Object.freeze({ x: 0, y: 0 });
  pointC.x = 15; // throws or fails silently
  pointC.z = 0; // throws or fails silently
  delete pointC.y; // throws or fails silently
```

There are corresponding function that check if an object is frozen, sealed
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

## Prototypical inheritance

JavaScript implements a prototype-based inheritance model.
Each object has a special prototype field that points directly
to another object (NOT a class).

An object literal has the `Object.prototype` set as its prototype
```javascript
  Object.getPrototypeOf({ a: 1 }) === Object.prototype // true
  Object.getPrototypeOf([ 1, 2 ]) === Object.prototype // false
  Object.getPrototypeOf([ 1, 2 ]) === Array.prototype // true
  Object.getPrototypeOf(Array.prototype) === Object.prototype // true
```

### Object.create

You can create objects with a specific prototype.
If a property is missing when looking for properties
using the `.` or `[]` syntax, the engine will
search for it down the prototype chain.
```javascript
  const rect1 = Object.create({ getArea() { return this.a * this.b; }});
  rect1.a = 5;
  rect1.b = 6;
  rect1.getArea(); // 30
```

Prototypes are alive! Changing the prototype changes what inheriting objects see.
```javascript
  const protoPerson = {
    sayHi() { return `Hi, I'm ${this.name}`}
  };

  // use can pass an object of property descriptors
  // similarly to Object.defineProperties
  const misho = Object.create(protoPerson, { name: { value: 'Misho' }});
  misho.sayHi(); // "Hi, I'm Misho"

  protoPerson.sayHi = function () {
    return 'I forgot my name';
  };
  misho.sayHi(); // "I forgot my name"
```

### The new operator

In order to creating objects using `new` we need a `constructor` function
which sets the properties of the new object. The prototype of the new object is set to the constructor function's prototype property.

```javascript
  function Rect(a,b) {
    this.a = a;
    this.b = b;
  }

  Point.prototype.getArea = function () {
    return this.a * this.b;
  };

  const rect1 = new Rect(5, 6);
  rect1.getArea(); // 30

  rect1.constructor; // the Rect function
```

## Patterns

### Factory function

```javascript
  function createTaxi(driver) {
    // use any object creation technique
    const taxi = createCar();
    taxi.driver = driver;
    taxi.meter = new Meter();

    taxi.on('start', taxi.meter.start);
    taxi.on('stop', taxi.meter.stop);

    return taxi;
  }
```


### Objects as maps
```javascript
  const translations = {
    en: 'Hello',
    bg: 'Здравейте'
  };

  const sayHi = (lang) => translations[lang] || translations['en'];
```