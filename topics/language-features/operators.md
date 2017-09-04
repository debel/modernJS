---
  title: Operators
---
# Operators

## Binary Operators
  ```javascript
    a && b; // logical AND; short circuit, returns value (not boolean)
    a || b; // logical OR; short circuit, returns value (not boolean)

    a << 1 // bitwise shift left, preserves the sign
    a >> 1 // bitwise shift right, preserves the sign
    a >>> 1 // bitwise shift right, disregards sign

    a & 0; // bitwise AND
    a | 0; // bitwise OR
    a ^ 0; // bitwise XOR

    a = 1; // assigns the value 1 to the variable "a"
    a += 1; // increment the value of the variable "a"
    a -= 1; // decrement the value of the variable "a"
    a *= 1; // multiply the value of the variable "a"

  ```

## Unary Operators

```javascript
  typeof a;

  !a // logical NOT
  ~a // bitwise NOT

  +a // unary plus
  -a // unary minus
```

## Operator precedence
