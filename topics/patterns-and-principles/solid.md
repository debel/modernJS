---
  title: SOLID Principles
---

# SOLID Principles

## Single Responsibility

A module should have only one source of change.

Bad:
```javascript
  function gameOver(gameState) {
    if (gameState.player1.health === 0) {
      return 'Congratulations player 1';
    }
    else {
      return 'Congratulations player 2'
    }
  }
```

Good:
```javascript
  function gameOver(gameState) {
    reportWinner(getWinner(gameState));
  }
```

## Open/Close

A module should be open for extension and closed for modification.

```


```

## Liskov substitution

A module should be interchangeable with any module that implements the same interface.

```javascript
const thermometer = (sensor) => ({
   city: sensor.city,
   averageTemp() {
     const readings = sensor.readings();
     return readings
      .reduce((sum, r) => sum + r, 0) / readings.length;
   }
});

const hottestCity = thermometers =>
  thermometers.reduce((hottest, thrm) =>
    thrm.averageTemp() > hottest.averageTemp() ?
      thrm : hottest,
  thermometers[0]);

hottestCity([
  thermometer({ city: 'London', readings() { return [21, 23, 20]; }}),
  thermometer({ city: 'Rome', readings() { return [28, 28, 27]; }}),
  thermometer({ city: 'New York', readings() { return [75, 76, 77]; }})
]);
```

#### &nbsp;

```javascript
  const humanWorker = {
    work() { efficiency = 0.2; },
    rest() { eat(); nap(); }
  };

  const robotWorker = {
    work() { efficiency = 0.7; }
    rest() { throw new Error("Robot's don't rest"); }
  };

  const workShift = (worker) => {
    while (hours < 4) {
      worker.work();
    }
    execute(worker.work, ''
    worker.rest();

    while (hours < 4) {
      worker.work();
    }
  }
```

## Interface segregation

A module should use local data objects and not depend on objects from other sub-systems.

## Dependency inversion

The specific implementation should depend on the abstracted business logic
