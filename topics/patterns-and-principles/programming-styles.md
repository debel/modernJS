---
  title: Programming styles
---

# Programming styles

## Imperative

```javascript
function sumItemsCost(items) {
  var sum = 0
  for (var i = 0; i < items.length; i += 1) {
    sum += items[i].cost;
  }
  return sum;
}

sumItemsCost([ { cost: 5 }, { cost: 4 }]); // 9
```

## Functional

```javascript
const sumItemsCost = items => items.reduce(
  (total, item) => total + item.cost,
  0
);

sumItemsCost([ { cost: 5 }, { cost: 4 }]); // 9
```

## Object Oriented

```javascript
class Items {
  constructor(...items) { this.items = items; }

  sumCost() { return this.items.reduce(
    (total, item) => total + item.cost,
    0);
  }
}

const items = new Items({ cost: 5 }, { cost: 4 })
items.sumCost(); // 9
```

## Declarative

```javascript
// props.items: [{ cost: 5 }, { cost: 4 }]
const ListSum = (props) =>
(<div>
  <List items={props.items} />
  <Form>
    <Input name="newItem" />
    <Submit onClick={props.addItem} />
  </Form>
  <Label>
    Sum: {props.items
      .reduce((total, item) => total + item.cost,0)}
  </Label>
</div>);
```
