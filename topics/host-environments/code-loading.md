# Code Loading
---

## Script tags

- work in the browser
- inline code or through url to file
- script tags can be created dynamically
- async loading through the `async` and `defer` attributes
- all scripts share the `window` global scope
---

## Script tags

```html
  <script>
    var myGlobalVarialbe = 42;
    doSomethingCool(); // execute any global function
  </script>

  <script src="https://path.to/script.js"></script>
```
---

## CommonJS

- can be imported dynamically
- required code is resolved locally
  - global modules resolve through `node_modules`
- loaded and executed synchronously
- have their own "global" / module scope
---

## CommonJS

```javascript
  const buildInHTTPModule = require('http');

  const installedModule = require('express');

  const localModule = require('./my-app');
```

---

## ES6 Modules

- Browsers: the `type="module"` attribute changes the behavior of scripts
  - allows `import` / `export` declarations
  - module loading requires full urls

```javascript
  <script type="module">
    import * as lodash from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.15/lodash.min.js';
  </script>
```
---

## ES6 Modules

- Node.js: native module loading is supported since node v8.5.0
  - module loading through local paths and `node_modules`
 
[See Modules](../../language-features/modules/)
---

## Bundlers

Bundlers create a file(s) containing all the needed modules.

- Gulp (only concatenates files)
- Browserify (CommonJS only)
- Rollup (ES6 Modules only, tree-shaking)
- Webpack (tree shaking, async loading)
- load.js / SystemJS (async loading)
- See [Bundlers](../../tooling/bundling/)
---

## Links

- [Article about modules and code loading](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
- [Video about module loaders and bundlers](https://www.youtube.com/watch?v=ahRNMEA4mWw)
