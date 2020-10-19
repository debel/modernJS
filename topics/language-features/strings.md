# Strings

---
## String literals

```javascript
  'single quotes string literal'
  "double quotes string literal"

  const longString = "Lorem ipsum dolor sit amet, "
    + "cum stet accommodare cu, vituperatoribus te cum. "
    + "Ut mei viderer persecuti, vero malis ex quo. ";
```

---
## Template strings

Template strings can contain executable expressions.
Expressions are resolved at the point of definition.

```javascript
  `back quote template literal with ${expressions}`
  // will throw if expressions is not defined

  `<a href=${item.getUrl()}>${item.getLabel()}</a>`
```

---
## Properties Operators

```javascript
  const abc = 'abcdefg';
  const hello = 'hello world';

  abc.length // 3
  hello.length // 11

  // get a character
  abc[0] // "a"
  abc[100] // undefined

  hello === "hello world" // true
  hello > abc // true
```

---
## String methods

### Char access

```javascript
  "hello".charAt(0) // "h" ASCII
  "hello".charCodeAt() // 104 Unicode
  "hello".codePointAt(0) // 104 UTF-16
```

### Containment predicates

```javascript
  "hello world".indexOf("hello") // 0
  "hello world".includes("hello") // true

  "hello world".indexOf("WORLD") // -1
  "hello world".includes("WORLD") // false

  "hello".startsWith('h') // true
  "hello".endsWith('o') // true
```

---
## Split and concat

```javascript
  "hello".split('') // ['h', 'e', 'l', 'l', 'o']
  "split by word".split(' ') // ['split', 'by', 'word']

  "hello".concat(" world") // "hello world"
```

---
## Substr vs Substring

```javascript
  // substr(index, lenght)
  "hello world".substr(6, 5) // world

  // substring(index, index)
  "hello world".substring(6, 11) // world
```

---
## Replace

```javascript
  // replaces only the first occurrence of the given string
  "hello BIRD BIRD".replace('BIRD', 'world') // "hello world BIRD"

  // replaces all occurrences of the given string
  "hello BIRD BIRD".replace(/BIRD/g, 'world') // "hello world world"
```

---
## Unicode

```javascript
  '👨‍👩‍👦'.split('') // [ '👨', '👩', '👦' ]
  '👨' + '🏽' === "👨🏽" // true
```

---
## Links

- [http://2ality.com/2013/09/javascript-unicode.html]
- [http://speakingjs.com/es5/ch24.html]
