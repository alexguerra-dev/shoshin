# Variables

1. **Declaring Variables:**

   - You can declare a variable using `var`, `let`, or `const`.
   - **`var`:** Declares a variable with function scope or global scope. It's somewhat outdated due to its scope limitations.
   - **`let`:** Introduces a block-scoped variable, which means the variable is limited to the block within `{}` in which it is defined.
   - **`const`:** Declares a block-scoped, read-only constant. The value of a `const` variable cannot be changed through reassignment.

2. **Initializing Variables:**

   - Variables can be initialized at the time of declaration.

   ```javascript
   let age = 30
   const birthYear = 1995
   var name = 'Alex'
   ```

3. **Scope:**

   - **Global Scope:** Variables declared outside of any function or block. Accessible everywhere in the code.
   - **Function Scope:** Variables declared within a function using `var`. Accessible only inside the function.
   - **Block Scope:** Variables declared using `let` or `const` inside a block (e.g., loops or `if` statements). Accessible only within the block.

4. **Dynamic Typing:**

   - JavaScript is dynamically typed, meaning a variable can hold any type of data and can change types dynamically during execution.

5. **Hoisting:**
   - Variable and function declarations are moved to the top of their containing scope during compile time. However, with `let` and `const`, variables are not initialized and accessing them before declaration results in a Reference Error.
