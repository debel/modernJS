---
  title: JSON
---

# JSON

JSON stands for JavaScript Object Notation and is a subset of the language.
It is intended as a data exchange format.

## Syntax

See [JSON specification](http://www.json.org/)

## JSON methods

```javascript
  const object = JSON.parse('{ "id": 0, "message": "hello", "someArray": [1, 2, 3]  }');
  console.log(object.message, object.number, object.someArray);
```

```javascript
  const object = {
    id: 1,
    message: 'hello',
    myArray: [1, 2, { anotherObject: true }]
  };

  const jsonString = JSON.stringify(object);
```

See [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON]

## Mime Type

`application/json`
