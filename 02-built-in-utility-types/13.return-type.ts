/**
 * ======================================================
 * Topic: Utility Type – `ReturnType<T>`
 * ======================================================
 *
 * `ReturnType<T>` extracts the **return type** of a function type `T`.
 * Useful when:
 * - You want to infer the type returned by a function
 * - Avoid manually duplicating types
 * - Keep types consistent when functions change
 */

/** Example function */
function getUser() {
  return {
    id: 1,
    name: "John Doe",
  };
}

/**
 * Extract the return type of `getUser`
 */
type UserReturnType = ReturnType<typeof getUser>;
/*
  Resulting type:
  {
    id: number;
    name: string;
  }
*/

/** Example usage */
const user: UserReturnType = getUser();

console.log(user.id);   // 1
console.log(user.name); // "John Doe"

/**
 * ======================================================
 * Notes
 * ======================================================
 *
 * - Works with regular functions, arrow functions, and methods
 * - TypeScript infers the return type, so you don’t have to repeat it
 * - Useful for API responses, factory functions, and higher-orde*
*/