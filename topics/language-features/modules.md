## Modules
---

### Asynchronous Module Definition (AMD)

- popular library: [requireJS](http://requirejs.org/)
- loads code through `script tags` or `require`
- Requires a name to path / url configuration
- module code is "isolated" within its function scope
---

### Asynchronous Module Definition (AMD)

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

## UMD

- UMD stands for Universal Module Definition
- Wraps your module so that it is acceptable to any type of module system
  - Wrapper introduces size and runtime overhead
  - Useful when publishing a library
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

## Dynamic module import

```javascript
  import('my-module').then(moduleExports => {
    moduleExports.doYourThing();
  });
```
---

## Links

- See [Code loading](../../host-environments/code-loading/)
- [Article about modules and code loading](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
