---
  title: Promises
---

# Promises

## Using promises

Handle a value once it's available
```javascript
  waitForAnswer().then(doSomethingWithIt);
```

Or handle the error if something goes wrong
```javascript
  waitForAnswer().catch(handleError);
```

### Chaining

Each call of the `then` method returns a new promise
```javascript
  getUserProfile()
    .then(profile => download(profile.image))
    .then(profileImage => applyEffects(profileImage))
    .then(imageWithEffects => saveFile(imageWithEffects))
    .then(() => console.log('done'))
    .catch(error => console.error('something went wrong'));
```

### Fan-out

Adding multiple handlers for the same promise
```javascript
  const p1 = waitForAnswer();
  const p2 = p1.then(answer => console.log(answer));
  const p3 = p1.then(answer => answer * 2);
  p2.then(console.log);
  p3.then(console.log);
```

### Catch order

`handleError` will catch an exceptions coming
from either `waitForAnswer` or `useAnswer`
```javascript
  waitForAnswer()
    .then(useAnswer)
    .catch(handleError);
```

In this case the `catch function` will provide
a default value to the next `then function`
```javascript
  waitForAnswer()
    .catch(logErrorAndDefault)
    .then(useAnswerOrDefault)
```

### Execution order

```javascript
  setTimeout(() => console.log('A'), 0);
  console.log('B');
  Promise.resolve('C').then(c => console.log(c));
  console.log('D');

  // B D C A
```

## Creating promises

```javascript
  const waitOneMinute = new Promise((resolve, reject) => {
    setTimeout(resolve, 60 * 1000);
  });

  waitOneMinute.then(doStuff);
```

### Ajax with a promise

```javascript
  const ajax = ({ method = 'GET', url, data = null }) =>
    new Promose((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
      if (xhr.state === 4) {
        if (xhr.error) { reject(xhr.error); }
        else { resolve(xhr.responseText); }
      }
    };
    xhr.open(method, url); xhr.send(data);
  });
```

## Promise methods

```javascript
  Promose.resolve(21)
    .then(number => number * 2)
    .then(number => console.log(number));

  Promise.reject('Error')
    .catch(error => {
      console.log(error);
    });
```

## Promise methods

```javascript
   Promise.all([
     ajax('myScript.js'),
     ajax('myStyles.css')
     ajax('myData.json'),
   ]).then(([script, styles, data]) => {
     // all 3 resources are available here
   });

   Promise.race([
     ajax('source1/data.json'),
     ajax('source2/data.json')
   ]).then(data => {
     // gets the data from the first source to succeed
   });
```

### Promise.try proposal

```javascript
  Promise.try(() => getAnswerMightThrow())
  .then(useAnswer)
  .catch(handleError);
```
