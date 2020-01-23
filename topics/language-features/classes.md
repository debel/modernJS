# Classes
---

## Declaration

### Class statement

```javascript
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    getCoordinates() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }

  const center = new Point(0, 0);
```
---

### Class expression

```javascript
  const Point = class { getX() {}, getY() {} };
```
---

## Inheritance

See [Prototypes](prototypes.md)
---

## Extends

## Super

## Static
