# Events

## DOM Events

```javascript
  const button = document.createElement('button');
  button.textContent = 'Click me!';
  button.addEventListener('click', function (clickEvent) {
    console.log({ this, clickEvent });
  });

  document.body.appendChild(button);
```

## Custom Events in Browser

```javascript
  const myEvent = new Event('eventName');

```


## Events in NodeJS

```javascript
  
```
