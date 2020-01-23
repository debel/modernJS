# Async/Await

```javascript
// async functions return a promise
async function getData() {
  const data = await fetch('url'); // await any promise
  if (!validate(data)) { throw new Error('bad data'); }
  return transform(data);
}

// use try/catch as normal
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

## The problem with loops

Waits for each url to be downloaded
before requesting the next one
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

The requests for all urls start at the same time
```javascript
async function getContent(urls) {
  return Promise.all(
    urls.map(url => { return await fetch(url); })
  );
}
```
