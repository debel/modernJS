# Promises
represent the eventual completion or failure of an asynchronous operation and its resulting value.
---

## Using promises

Promise objects expose the `then` and `catch` methods

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

### Recovering from errors

Calls to `catch` also return a new promise. Execution continues through the chain.

```javascript
  waitForAnswer()
    .catch(logErrorAndDefault)
    .then(useAnswerOrDefault);

  // useAnswerOrDefault will be called in all cases, even if waitForAnswer threw an error
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

### Fan-out

Adding multiple handlers for the same promise
```javascript
  const p1 = Promise.resolve(10);
  
  const p2 = p1.then(answer => answer * 2);
  const p3 = p1.then(answer => answer / 2);

  p2.then(console.log); // 20
  p3.then(console.log); // 5
```
---

### Execution order
Resolved promises are executed each time the current event loop task is completed

```javascript
  setTimeout(() => console.log('A'), 0);
  console.log('B');
  Promise.resolve('C').then(c => console.log(c));
  console.log('D');

  // B D C A
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

### Using fetch

Fetch is a function that sends a request to a server and returns a promise
that will resolve with the server's response

```javascript
  fetch('https://path-to.some/data')
    .then(response => response.json()) // parse the response as json
    .then(useTheData);
```
