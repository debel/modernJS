# Promises
---

## Using promises

```javascript
  // Handle a value once it's available
  waitForAnswer().then(doSomethingWithIt);

  // Or handle just the error if something goes wrong
  waitForAnswer().catch(handleError);

  // Or handle both with a second argument to `then`
  waitForAnswer().then(handleAnswer, handleError);
```
---

### Catching errors

`handleError` will catch an exceptions coming
from either `waitForAnswer` or `useAnswer`
```javascript
  waitForAnswer()
    .then(useAnswer)
    .catch(handleError);
```
---

### Handle and continue

In this case the `catch function` will provide
a default value to the next `then function`
```javascript
  waitForAnswer()
    .catch(logErrorAndDefault)
    .then(useAnswerOrDefault)
```
---

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
---

### Fan-out

Adding multiple handlers for the same promise
```javascript
  const p1 = waitForAnswer();
  const p3 = p1.then(answer => answer * 2);
  const p2 = p1.then(answer => answer / 2);
  p2.then(console.log);
  p3.then(console.log);
```
---

### Execution order

```javascript
  setTimeout(() => console.log('A'), 0);
  console.log('B');
  Promise.resolve('C').then(c => console.log(c));
  console.log('D');

  // B D C A
```
---

## Creating promises

```javascript
  const waitOneMinute = new Promise((resolve, reject) => {
    setTimeout(resolve, 60 * 1000);
  });

  waitOneMinute.then(doStuff);
```
---

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
---

## Promise methods

```javascript
   Promise.all([
     fetch('myScript.js'),
     fetch('myStyles.css')
     fetch('myData.json'),
   ]).then(([script, styles, data]) => {
     // all 3 resources are available here
   });

   Promise.race([
     fetch('source1/data.json'),
     fetch('source2/data.json')
   ]).then(data => {
     // gets the data from the first source to succeed
   });
```
---

### Promise.try proposal

```javascript
  Promise.try(() => getAnswerMightThrow())
  .then(useAnswer)
  .catch(handleError);
```
---

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
