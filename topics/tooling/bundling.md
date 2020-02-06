# Bundlers

- given a starting point
- walk the graph of dependencies
- transform code through plug-ins
- output a single file (bundle)
---

## Webpack

- loaders
- plug-ins
- tree shaking
- code splitting
- async loading

Docs: https://webpack.js.org/
---

### Entry point(s)

Single entry point:
```javascript
/* webpack.config.js */
module.export = {
  entry: '/path/to/index.js'
};
```
---

Multiple entry points:
```javascript
/* webpack.config.js */
module.export = {
  entry: {
    app: '/path/to/app.js',
    vendor: '/path/to/vendor.js'
};
```
---

### Single output

Single bundle:
```javascript
/* webpack.config.js */
module.export = {
  output: {
    filename: 'bundleName.js',
    path: '/path/to/save/bundle'
};
```
---
### Multiple outputs

Multiple bundles:
```javascript
/* webpack.config.js */
module.export = {
  output: {
    filename: '[id]-[name]-[chunckhash]-[hash].js',
    path: '/path/to/save/bundle'
};
```
---

### Loaders

Loaders allow us to preprocess files
```javascript
/* webpack.config.js */
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
};
```
---

### Plugins

Plugins can hook into any step in the process
```javascript
/* webpack.config.js */
module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
```
---

## Other bundlers

- RequireJS cli
- Browserify
- Rollup
