/**
 * Demonstrates Type Narrowing Using Strict Equality Checks
 *
 * Type narrowing allows TypeScript to infer a more specific type
 * from a union type based on runtime checks.
 *
 * This example demonstrates narrowing using the strict equality operator `===`.
 *
 * How it works:
 *  - `x` has the type `string | number`
 *  - `y` has the type `string | boolean`
 *  - When `x === y` evaluates to `true`, the only type they can both be is `string`
 *  - Therefore, TypeScript automatically narrows both `x` and `y` to `string`
 *    inside the if block.
 */
function narrowingViaEqualityChecks(
  x: string | number,
  y: string | boolean
) {
  // Check for equality
  if (x === y) {
    // TypeScript now knows that x and y must both be string
    // so we can safely call string methods
    console.log(x.toUpperCase()); // ✅ valid
    console.log(y.toUpperCase()); // ✅ valid
  } else {
    // Outside this block, types remain as originally declared
    // x: string | number
    // y: string | boolean
  }
}


narrowingViaEqualityChecks("hello", "hello"); // x === y → true, both strings
narrowingViaEqualityChecks(5, true);         // x === y → false, no narrowing occurs
