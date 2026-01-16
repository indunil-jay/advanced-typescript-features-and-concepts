/**
 * Demonstrates Type Narrowing Using Assertion Functions
 *
 * Assertion functions tell TypeScript that a value has a certain type.
 * They are useful for runtime checks and narrowing types in subsequent code.
 *
 * Syntax: `asserts value is Type`
 * - If the assertion fails, the function throws an error.
 * - If it passes, TypeScript treats the value as the asserted type.
 */


function assertIsString(value: any): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Not a string");
  }
}

const input: unknown = "Hello TypeScript";

// Use assertion function to narrow type
assertIsString(input);

// After assertion, TypeScript knows `input` is a string
console.log(input.toUpperCase()); 
