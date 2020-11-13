# Classes

Classes are syntactic sugar - the underlying implementation still uses prototypes
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
  center.getCoordinates(); // { x: 0, y: 0 }
```
---

### Class expression

```javascript
  const Point = class {
    getX() { ... },
    setX() { ... }
  };

  const center = new Point(0, 0);
```
---

### Constructor

The `constructor` function is invoked when a new instance of the class is created using `new`.
Inside the constructor `this` is set to the newly created object.

```javascript
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
```
---

## Extends
Classes can extend other classes

```javascript
  class Point3D extends Point {
    getZ() { ... },
    setZ() { ... },
  }

  const point3d = new Point3D();
  point3d.getX(); // inherited method
```
---

## Super
Classes can access their parents `constructor` using `super`

```javascript
    class Point3D extends Point {
      constructor(x, y, z) {
        super(x,y); // executes Point's constructor
        this.z = z;
      }

      getZ() { ... },
      setZ() { ... },
  }

  const point3d = new Point3D();
  point3d.getX(); // inherited method
```
---

## Inheritance

See [Prototypes](../prototypes/)
