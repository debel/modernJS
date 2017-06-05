# Promises

## Using promises

```javascript
  waitForAnswer().then(doSomethingWithIt);
```

```javascript
  waitForAnswer().catch(handleError);
```

```javascript
  waitForAnswer()
    .then(useAnswer)
    .catch(handleError);
```

```javascript
  waitForAnswer()
    .catch(logErrorAndReturnDefault)
    .then(useAnswerOrDefault)
```

```javascript
  const p1 = waitForAnswer();
  const p2 = p1.then(answer => console.log(answer));
  const p3 = p1.then(answer => answer * 2);
  p2.then(console.log);
  p3.then(console.log);
```

## Creating promises

```javascript
  const waitOneMinute = new Promise((resolve, reject) => {
    setTimeout(resolve, 60 * 1000);
  });

  waitOneMinute.then(doStuff);
```

```javascript
  const ajax = ({ method = 'GET', url, data = null }) => new Promose((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.state === 4) {
        if (xhr.error) { reject(xhr.error); }
        else { resolve(xhr.responseText); }
      }
    };

    xhr.open(method, url);
    xhr.send(data)
  });

  ajax({ url: 'api.mysite.com' })
    .catch(handleError)
    .then(useData);
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
