# Code Loading
---

## Script tag

- scripts are resolved through urls
- script tags can be created dynamically
- async loading through the `async` and `defer` attributes
- scripts share the `window` global scope
---

## CommonJS

- modules can be imported dynamically
- modules are resolved locally
  - global modules resolve through `node_modules`
- modules are loaded and executed synchronously
- modules have their own global scope
---

## ES6 Modules

- Browsers: the `type="module"` attribute changes the behavior of scripts
  - allows `import` / `export` declarations
  - module loading requires full urls
- Node.js: native module loading is supported since node v8.5.0
  - module loading through local paths and `node_modules`
- [See Modules](../../language-features/modules/)
---

## Module loaders

- Module loaders are a proposal for how
host environments resolve module names
in a consistent yet extensible manner.
- [Module loader spec](https://whatwg.github.io/loader/)
---


## Module bundlers

Bundlers create a file(s) containing all the needed modules.

- require's cli
- Gulp (only concatenates files)
- Browserify (CommonJS only)
- Rollup (ES6 Modules only, tree-shaking)
- Webpack (tree shaking, async loading)
- load.js / SystemJS (async loading)
- See [Dev tools](../../development-tools/)
---

## Links

- [Article about modules and code loading](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
- [Video about module loaders and bundlers](https://www.youtube.com/watch?v=ahRNMEA4mWw)
