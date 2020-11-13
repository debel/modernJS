# Async/Await
syntactic sugar on top of promises, making asynchronous code look more like synchronous code.
---

## Async functions
Async functions always return a promise

```javascript
  async function getData() {
    return { text: 'hello', numbers: [1, 2, 3] };
  }

  getData().then(useTheData);
```
---

## Throwing an error
Async functions always return a promise

```javascript
  async function getData() {
    throw new Error('no data');
  }

  getData().catch(handleError);
```
---

## Waiting for a promise
Using the await keyword instructs JavaScript to "pause" the execution of the function
until the promise is resolved

```javascript
  async function getData() {
    const data = await fetch('url');
    // execution will continue only after the promise is resolved

    const newData = transform(data);
    return newData;
  }
```
---

## Try/catch
```javascript  
// you can use try/catch instead of then() and catch()
async function render() {
  try {
    const data = await getData();
    display(data);
  catch (error) {
    display(error);
  }
}
```
---

## Await and loops

Waits for each url to be downloaded before requesting the next one

```javascript
async function getContent(urls) {
  const results = [];

  for (url of urls) {
    const content = await fetch(url);
    results.push(content);
  }

  return results;
}
```
---

## Async concurrency

Requests for all urls start at the same time

```javascript
async function getAllContent(urls) {
  return Promise.all(
    urls.map(url => fetch(url))
  );
}
```
---

## Links

- [async/await on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [for-await-of Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
- [await in array functions](https://zellwk.com/blog/async-await-in-loops/)
