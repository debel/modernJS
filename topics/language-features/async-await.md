# Async/Await

```javascript
  async function poll() {
    const data = await getData();
    if (!validate(data)) { throw new Error('bad data'); }
    return transform(data);
  }

  async function render() {
    const data = await(poll());
    setState(data);
  }

  const render = () => poll().then(setState);
```
