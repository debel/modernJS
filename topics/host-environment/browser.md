# Browser

The browser is both powerful and restricted at the same time.

## Capabilities
- networking (multiple complex protocols)
- rendering (html, images, video, canvas, webGL, print)
- user-media (mic, camera, geolocation, joysticks)
- file system access (very restricted, user-driven)

## Browser APIs

### DOM

```javascript
  const element = document.getElementById('main_content');
```

```javascript
  const element = document.querySelector('#byId');
  const elements = document.querySelectorAll('.byClassName');
```

```javascript
  element.addEventListener('eventName', function () {
    // handle each event e.g. click
  });
```

*Anti-Pattern*
```javascript
  /* !!! THIS IS BAD CODE!!! */
  document.write("<h1>Content</h1>");
```

```javascript
  document.body.innerHTML = "<h1>Content</h1>"
```

```javascript
  var title = document.createElement("h1");
  title.textContent = "Content";
  document.body.appendChild(title);

### Local Storage

### User Media

### Service Workers
