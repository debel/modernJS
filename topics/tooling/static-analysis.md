# Static Analysis

- preventing common errors and "code smells"
- enforcing code style and best practices

---
## ESLint

```bash
  # installing
  npm i -g eslint
  npm i -g eslint-config-airbnb

  # running
  eslint .
```
---

## ESLint Configuration

Create an `.eslintrc` file in the project directory.
```javascript
  {
      "env": { // where is your code going to run
          "es2020": true,
          "browser": true,
          "node": true
      },
      "globals": { // whitelist specific global variables 
        "var1": "writable",
        "var2": "readonly"
      }
  }
```
---

## ESLint Rules

Eslint will complain if your code violates the specified rules.
```javascript
  "rules": { 
    "eqeqeq": "off",
      "curly": "error",
      "quotes": ["error", "double"]
  }
```
- See [ESLint's list of available rules](https://eslint.org/docs/rules/)
---

## ESLint Presets

You can use a predefined list of rules, also known as a "style guide".

```javascript
  "extends": "eslint:recommended",
  // or
  "extends": "airbnb",
```
```bash
 # in the terminal
  npm install --save-dev eslint-config-airbnb
```
- See the [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript)
---

## Prettier
Common code formatting enforces a consistent look and feel of a team's codebase.

```bash
  # installing
  npm install -g prettier

  # running
  prettier .
```
---

## Integrating prettier with eslint

```bash
  # installing in terminal
  npm install -D eslint-config-prettier eslint-plugin-prettier
```
```javascript
  // configuration in .eslintrc
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
```
---

## Type systems

- Flow
- Typescript