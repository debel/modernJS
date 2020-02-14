# Observables
---

## Push/Pull

### Events are a push mechanism.
The consumer `handleEvent` is just a callback.
We have no guarantees when or how many times it would be called. The producer has full control.

```javascript
  producer.on('event', handleEvent);
```
---

### Generators are a pull mechanism.
The consumer requests data from the producer through the `next` method. The producer has no control over when the data is handled.

```javascript
  function* producer() { /*...*/ };

  const consumer = producer();
  const dataPoint1 = consumer.next(); // { value, done }
  const dataPoint2 = consumer.next(); // { value, done }
```
---

## Observables

```javascript
  const observable = Observable.from(event);
  const subscription = observable.subscribe({
    next(value) { },
    error(error) { },
    done() { }
  });
```
---

## Operations & Composability

![Operators](/images/observables.png)

See [RxJS](https://rxmarbles.com)