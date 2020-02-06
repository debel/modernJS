# Transpilers
---

## Babel

- transforms non-standard syntax
- manipulates the js AST
- outputs valid target js code
---

## Using Babel

- through a dynamic loader (Anti-pattern)
- through the console (Better)
- through a bundler / task runner (Best)
---

## Babel dynamic loader

*!!Anti-pattern!!* Inject babel in your code and compile at run-time
Node.js:
```javascript
  require("babel-register");
  // all required files will now be transformed by Babel
```
---

Browsers:
```html
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script type="text/babel">
    class Person = {
      constructor(name) { this.name = name; }
      sayHi() { return `Hello, my name is ${this.name}`; }
    }
  </script>
```
---

## Babel Cli

Compile in advance on your dev machine or CI
```bash
  babel script.js --out-file compiled-script.js

  babel ./src --out-dir ./lib
```
---

## Presets & Plugins

Babel expects a `.babelrc` json config file in the project root.
```json
  {
    "presets": [ "es2019", "react" ],
    "plugins": [ "transform-decorators" ]
  }
```
---
## Other Transpilers

- Google Closure Compiler
- TypeScript
- Elm
- ClosureScript
- and many more
