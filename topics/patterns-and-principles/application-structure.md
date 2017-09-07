---
  title: Application structure
---

# Application structure

## Organized by technical type

```
src/models
  - user-model.js
  - payment-model.js
src/views
  - user-view.js
  - payment-view.js
src/controllers

test/models/
test/views/
test/controllers

documentation/
```

- Number of directories is constant
- All directories grows with the addition of new modules
- Top level view of frame-work, not intent
- Modules are spread across multiple directories

## Organized by business function

```
src/users
  - api-client.js
  - component.js
  - tests.js
  - readme.md
  - config.json
src/orders
src/payments
```

- Each module includes its code, tests, documentation and configuration
- Number of files per directory is constant
- Number of directories grows with the number of business modules
- Each module is potentially independent
