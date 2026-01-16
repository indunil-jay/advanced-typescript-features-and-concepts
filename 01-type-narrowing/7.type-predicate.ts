/**
 * Demonstrates Type Narrowing via Type Predicates (Custom Type Guards)
 *
 * Type predicates allow you to create custom functions that
 * tell TypeScript about the type of a variable.
 *
 * Syntax: `parameterName is Type`
 * This tells TypeScript that if the function returns true,
 * the parameter can safely be treated as the specified type.
 */


function isString(value: any): value is string {
  return typeof value === "string";
}

const value: unknown = "hello world";

if (isString(value)) {
  // Inside this block, TypeScript knows `value` is a string
  console.log(value.toUpperCase()); 
} else {
  // Here, TypeScript knows `value` is NOT a string
  console.log("Value is not a string");
}
