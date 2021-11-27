# Browsers
The browser is both powerful and restricted at the same time.
---

## Capabilities
- networking (multiple complex protocols)
- rendering (html, images, video, canvas, webGL, print)
- user-media (mic, camera, geolocation, joysticks)
- file system access (very restricted, user-driven)
---

### Browser APIs: the DOM

```javascript
  const element = document.getElementById('main_content');

  const element = document.querySelector('#byId');
  const elements = document.querySelectorAll('.byClassName');

  element.addEventListener('eventName', function (event) {
    // handle each event e.g. click
  });
```
---

### Rendering DOM elements

*Anti-Pattern*
```javascript
  /* !!! THIS IS BAD CODE!!! */
  document.write("<h1>Content</h1>");
```

*Better*
```javascript
  document.body.innerHTML = "<h1>Content</h1>"
```

*Even better*
```javascript
  var title = document.createElement("h1");
  title.textContent = "Content";
  document.body.appendChild(title);
```
---

### Local Storage

`localStorage` is a key-value database inside the browser

```javascript
  localStorage.getItem('username'); // null
  localStorage.setItem('username', 'Gosho');

  sessionStorage.getItem('username');
  sessionStorage.setItem('username', 'Gosho');
```
---

### Geo Location

```javascript
  navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.error(error),
    {
      enableHighAccuracy: true
    }
  );
```
---

### Fetch

```javascript
  fetch('http://my.server/data.json')
    .then(response => (response.ok ?
      response.json() : Promise.reject('bad response')))
    .then(data => handleData(data));
```
---

### Web Audio API

```javascript
  const context = new AudioContext();
  const oscillator = context.createOscillator();

  oscillator.connect(context.destination);
  oscillator.start(0);

  oscillator.frequency.value = 8800;
```
---

### Canvas / WebGL

- [WebGL Juggler](http://www.jugglesaver.co.uk/juggle/webgl.html)

---
### User Media
---
### Service Worker
---

## Links

- [Browsers language support](https://kangax.github.io/compat-table/es6/)
