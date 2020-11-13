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
  </ul>
  <script>
    document.getElementById('colors').addEventListener(
        'click', event => console.log(event.target.innerText)
    );
  </script>
```
---

## Custom Events in Browsers

```javascript
  // Listen for events on a DOM element (e.g. document)
  document.addEventListener(
    'myCustomEvent',
    event => console.log(event.detail)
  );

  // Trigger the event
  const myEvent = new CustomEvent(
    'myCustomEvent',
    { detail: 'any custom properties' }
  );

  document.dispatchEvent(myEvent);
```
---

## Events in NodeJS

```javascript
  const EventEmitter = require('events').EventEmitter;
  const source = new EventEmitter();

  // execute the callback function each time the event is triggered
  source.on('eventName', callback);

  // execute the callback only once
  source.once('eventName', callback);

  // trigger the event
  source.emit('eventName', payload);
```
---

## WebSockets
A network protocol on top of HTTP that allows for
2-way communication between the browser and the server

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
An event with multiple producers and (possibly) a single consumers.
```javascript
  // multiple players fire the same event
  lobby.emit('ready', player);

  //the lobby module pairs players in games
  lobby.on('ready', startWithTwoPlayers);
```
---

### Pub/Sub
Allows us to decouple the producers and consumers (publishers and subscribers) of a messaging system.

```javascript
  topics.on('new-item-on-sell', handleNewItem);
  topics.on('item-order', handleItemOrder);
  topics.on('customer-support', handleMyMessage);

  topics.emit('new-item-on-sell', { name: "Laptop", price: 873.50 });
  topics.emit('item-order', { client, item });
```
