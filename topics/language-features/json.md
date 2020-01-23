# JSON

JSON stands for JavaScript Object Notation and is a subset of the language.
It is intended and used as a data exchange format.

---
## Syntax
JSON cannot contian any functions or other behaviours (getters / setters).
It is data only and is considered a secure medium for communication.


See [JSON specification](http://www.json.org/)

---
## JSON parse

```javascript
const jsonString = '{ "id": 0, "message": "hello", "someArray": [1, 2, 3]  }';
const object = JSON.parse(jsonString);
console.log(object.message, object.number, object.someArray);

JSON.parse(100); // returns 100
JSON.parse("test"); // throws an error
```

---
## JSON stringify

```javascript
  const object = {
    id: 1,
    message: 'hello',
    myArray: [1, 2, { anotherObject: true }]
  };

  const jsonString = JSON.stringify(object);
  const messageOnly = JSOn.stringify(object, ['message']);
```

---
## Links

[MDN JSON reference](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON)
