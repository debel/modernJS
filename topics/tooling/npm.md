# NPM

node package manager

---

## package.json

```json
  {
    "name": "my-project",
    "version": "1.0.0",
    "description": "a cool project",
    "main": "index.js",
    "scripts": {
      "start": "node index.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "My Name",
    "license": "ISC",
    "dependencies": {
      "express": "^4.16.4",
      "react": "^16.8.4"
    }
  }
```

---

## bootstrapping a project

Prompts a series of questions and creates a `package.json` as a result
```bash
  npm init
```

---

## installing packages

```bash
  # install all packages listed in package.json
  npm install

  # install a specific package
  npm install package-name

  # shortcut for install
  npm i package-name

  # installing a specific version, defaults to @latest
  npm i package-name@version
```

---

## types of dependencies

```bash
  # defaults to --save-prod
  npm install --save-prod package-name

  # development packages e.g. testing libraries
  npm install --save-dev package-name

  # optional packages e.g. linters
  npm install --save-optional package-name

  # install packages globally
  npm install --global package-name

  # install without adding to package.json
  npm install --no-save package-name
```

---

## pacakge versions

```json
  {
    "version names": "major.minor.patch",
    "exact": "1.2.3",
    "upgrade patch": "1.2" or "1.2.x" or "~1.2.3",
    "upgrade minor": "1" or "1.x" or "^1.2.3",
    "upgrade major": "*" or "x"
  }
```

- **patch**: backwards compatible bug fixes
- **minor**: backwards compatible new features
- **major**: breaking changes

---

## viewing installed packages

```bash
  npm list

  # shortcut for list
  npm ls

  # listing top-level packages only
  npm ls --depth=0
```

---

## updating packages

```bash
  npm update

  # same as above
  npm upgrade

  # shortcut for update
  npm up

  # update a specific packages only
  npm up package-name

  # update global packages
  npm up -g package-name
```

---

## removing packages

```bash
  npm remove package-name

  # shortcut for remove
  npm rm package-name

  # removing a global package
  npm rm -g package-name
```

---

## running commands

commands are listed in the `scripts` section of the `package.json`

```bash
  # list all available commands
  npm run

  # run a specific command
  npm run command-name
```

---

## Questions?
