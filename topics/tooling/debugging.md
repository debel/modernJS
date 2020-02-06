# Debugging

- Discover bugs
- Analyzing code during runtime
- Diagnose performance issues
---

## Browser Dev console

- Debugging
- Performance analysis
- Network logging
- Runtime DOM manipulation
- Application resources
---

## Debugger statement

The `debugger` statement instructs the engine to pause the execution of the code.
It works only if the development console is active.

```javascript
  debugger;
```
---

## Node debugging flags

Node.js exposes a debugger, which can be operated
either through the command line or remotely through
IDEs or the browser's dev console.

```bash
  node --inspect --debug-brk FILE_NAME
```
---

## Source Maps

- When using a transpiler such as `babel` or `typescript`
the running code is different from the code you've written
- Source Maps are files (or inlined comment blocks)
that map transpiled to original code.
- This allows easier tracing and debugging
- [Youtube video about Source Maps](https://www.youtube.com/watch?v=NkVes0UMe9Y)
---

### Using source maps
