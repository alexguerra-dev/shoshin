# Data

In JavaScript, the primitive data types are the most basic types of data. They include:

1. **Number:**

   - Represents numeric values.
   - Includes both integers and floating-point numbers.
   - Example: `42`, `3.14`, `NaN` (Not-a-Number).

2. **String:**

   - Represents a sequence of characters.
   - Can be enclosed in single quotes (' '), double quotes (" "), or backticks (`` ` `` for template literals).
   - Example: `'Hello'`, `"World"`, `` `Template String` ``.

3. **Boolean:**

   - Represents a logical entity and can have only two values: `true` or `false`.
   - Example: `true`, `false`.

4. **Undefined:**

   - Denotes an uninitialized variable or a missing value.
   - A variable is `undefined` if it has been declared but not assigned a value.
   - Example: `let x;` (here `x` is `undefined`).

5. **Null:**

   - Represents the intentional absence of any object value.
   - It is a type of its own.
   - Example: `let y = null;`.

6. **Symbol:**

   - Represents a unique and immutable primitive value.
   - Useful for creating unique object property keys.
   - Example: `const sym = Symbol('description');`.

7. **BigInt:**
   - Allows representation of integers with arbitrary precision.
   - Can be used for numbers larger than the `Number` type can safely handle.
   - Example: `const bigIntNumber = 1234567890123456789012345678901234567890n;`.

These primitive data types are immutable, meaning their values cannot be changed. Understanding these types is crucial for effective data handling in JavaScript.
