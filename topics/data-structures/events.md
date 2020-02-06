# Events
---

## DOM Events

DOM events represent interactions from the user or the browser APIs.

### Listening for events
```javascript
  const button = document.getElementById('btn1');

  button.addEventListener('click', function (clickEvent) {
    console.log({ element: this, clickEvent });
  });
```
---

### Triggering Events
```javascript
  const button = document.getElementById('btn1');

  var aClick = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });

  button.dispatchEvent(aClick);
```
---

### Event propagation / delegation

Event bubbling means that event targeted at child nodes
will execute the event handlers of the chain of parent nodes.

```html
  <h1>Select your favorite color:</h1>
  <ul id="colors">
    <li>Green</li>
    <li>Blue</li>
    <li>Red</li>
  </ul>
  <script>
    document.getElementById('colors')
      .addEventListener(
        'click',
        (event) => console.log(event.target.innerText)
      );
</script>
```
---

## Custom Events in Browser

```javascript
  // Listening for events on a DOM element (e.g. document)
  document.addEventListener(
    'myCustomEvent',
    function ({ detail }) => console.log(detail)
  );

  // Trigger the event
  const myEvent = new CustomEvent(
    'myCustomEvent',
    { detail: 'custom properties' }
  );

  document.dispatchEvent(myEvent);
```
---

## Events in NodeJS

```javascript
  const EventEmitter = require('events').EventEmitter;
  const source = new EventEmitter();

  source.on('eventName', callback);
  source.once('eventName', callback);

  source.emit('eventName', payload);
```
---

## WebSockets

```javascript
  websocket.on('connection', socket => {
    socket.emit('hello');
    socket.on('message', console.log);
  });
```
---

## Patterns

Events are a great mechanism to implement various patterns.
---

### Fan-out
An event with a single producer and multiple consumers.
```javascript
  // these can be defined in different parts of the system
  btn.on('click', updateUI);
  btn.on('click', updateDB);
  btn.on('click', logsAndMetrics);
```
---

### Fan-in
An event with a multiple producers and (possibly) a single consumers.
```javascript
  // multiple players fire the same event
  lobby.emit('ready', player);

  //the lobby module pairs players in games
  lobby.on('ready', startWithTwoPlayers);
```
---

### Pub/Sub
A "hub" with multiple topics. Events are a natural implementation of the pub/sub pattern.

It allows us to decouple the producers and consumers (publishers and subscribers) of a messaging system.

```javascript
  topics.on('new-items', handleNewItem);
  topics.on('my-message', handleMyMessage);
  topics.on('item-order', handleItemOrder);

  topics.emit('new-item', { name: "Laptop", price: 873.50 });
  topics.emit('item-order', { item, client });
```
