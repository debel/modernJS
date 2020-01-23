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
---

## Asynchronous Module Definition (AMD)

- popular library: [requireJS](http://requirejs.org/)
- loads code through `script tags` or `require`
- Requires a name to path / url configuration
- module code is "isolated" within its function scope

```javascript
require([modules], function (modules) {
  doStuffWith(modules);
});

define('moduleName', [dependencies], function (dependencies) {
    return myPublicInterface;
});
```
---

## CommonJS

- Node.js's native module system
- Synchronous and local code loading

```javascript
  const myModule = require('moduleName');

  module.exports = anyTypeOfValue;
```
---

## ES6 Modules

- Static module declarations only
- Module loading is delegated to the host environment
- Modules are automatically in "strict mode"

```javascript
  import createServer from 'http';

  export default function startApp() {};
```
---

## UMD

- UMD stands for Universal Module Definition
- Wraps your module so that it is acceptable to any type of module system
  - Wrapper introduces size and runtime overhead
  - Useful when publishing a library
- [See Build tools](../../development-tools/task-runners/)
---

## Links

- See [Code loading](../../host-environments/code-loading/)
- [Article about modules and code loading](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
