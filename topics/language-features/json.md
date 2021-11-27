# JSON
stands for `JavaScript Object Notation`.

It is used as a text-based data exchange format.
JSON can only contian data.

---
## JSON parse

All objects keys in a json text must be double quoted.

```javascript
// Notice the object is declared as text inside a string
const jsonString = '{ "id": 0, "message": "hello", "someArray": [1, 2, 3]  }';
const object = JSON.parse(jsonString); // converts the text to an object
console.log(object.message, object.someArray[1]); // "hello" 2

JSON.parse(100); // returns 100
JSON.parse('"test"'); // returns "test"
JSON.parse("test"); // throws an error! Why?
```

---
## JSON stringify

```javascript
  const object = {
    id: 1,
    message: 'hello',
    myArray: [1, 2, { anotherObject: true }],
    myMethod: function() {},
  };

  // will not include the "myMethod" property because it is a function
  const jsonString = JSON.stringify(object);

  // select which object properties to include in the resulting JSON string
  const messageOnly = JSON.stringify(object, ['message']);
  // '{"message": "hello"}'
```

---
## Links

- [MDN JSON reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JSON specification](http://www.json.org/)