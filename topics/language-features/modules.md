---
  title: Modules
---

## Scripts

Loading code through a script tag
grants that code full access to the global scope

```html
  <script src="anyscript.js"></script>
  <script>
    use(window.anythingValue);
    window.youCan = 'override most globals';
  </script>
```

## AMD

Asynchronous Module Definition (requireJS)

```javascript
define('moduleName', function (dependencies) {
    return myPublicInterface;
});

require([modules], function (modules) {
  use(modules);
});
```

## CommonJS

Synchronous, node.js's native module system

```javascript
  const myModule = require('moduleName');

  module.exports = function (options) {}
```

## ES6 Modules

- Modules are automatically in "strict mode"
- Provides only static module definition declarations
- Module loading is delegated to the host environment

```javascript
  import createServer from 'http';

  export default function startApp() {};
```

## UMD

- UMD stands for Universal Module Definition
- Wraps your module so that it is acceptable to any type of module system
- [See Build tools](../../development-tools/task-runners/)

## Loaders

- [See Code loadering](../../host-environments/code-loading/)
