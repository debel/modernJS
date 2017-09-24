---
  title: Code loading
---

# Code Loading

## CommonJS

- modules can be specified dynamically
- modules are resolved locally
  - path modules are resolved by local paths
  - global modules resolve through `node_modules`
- modules are loaded and executed synchronously
- modules have their own global scope

## Script tag

- scripts are resolved through urls
- script tags can be created dynamically
- loading is controlled through the `async` and `defer` attributes
- scripts share the `window` global scope

## Modules

- the `type="module"` attribute changes the behavior of scripts
- native module loading is supported since node v8.5.0
- [See Modules](../../language-features/modules/)

## Module loaders

- Module loaders are a proposal for host environments can solve module resolution in an extensible manner
