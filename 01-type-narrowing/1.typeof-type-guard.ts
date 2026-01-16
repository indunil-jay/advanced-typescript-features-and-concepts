/**
 * Demonstrates type narrowing using the `typeof` operator.
 *
 * The `typeof` check allows TypeScript to narrow a union type
 * to a specific primitive type at runtime.
 *
 * In this case:
 *  - `value` can be `string | number`
 *  - When `typeof value === "string"`, TypeScript narrows `value` to `string`
 *  - Otherwise, `value` is narrowed to `number`
 */
function log(value: string | number) {
  if (typeof value === "string") {
    console.log(`Data type is string. Value is ${value}`);
  } else {
    console.log(`Data type is number. Value is ${value}`);
  }
}
