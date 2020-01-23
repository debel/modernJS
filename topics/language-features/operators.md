# Operators

---
## Unary Operators

```javascript
  !a // logical NOT
  ~a // bitwise NOT

  +a // unary plus
  -a // unary minus
```

---
## Logical Operators

```javascript
  a && b; // logical AND; short circuit, returns the value
  a || b; // logical OR; short circuit, returns the value
```

---
## Bitwise Operators

```javascript
  a << 1 // bitwise shift left, preserves the sign
  a >> 1 // bitwise shift right, preserves the sign
  a >>> 1 // bitwise shift right, disregards sign

  a & 0; // bitwise AND
  a | 0; // bitwise OR
  a ^ 0; // bitwise XOR
```

---
## Assignment Operators

```javascript
  a = 1; // assigns the value 1 to the variable "a"
  a += 1; // increment the value of the variable "a"
  a -= 1; // decrement the value of the variable "a"
  a *= 1; // multiply the value of the variable "a"
```

---
## Pipe operator proposal

```javascript
  "terces" |> reverse |> toUpperCase  // SECRET

  // equivalent to:
  toUpperCase(reverse("terces"));
```
See [Pipe operator proposal](https://github.com/tc39/proposal-pipeline-operator)

---
## Operator precedence

See [Operator Precedence on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
