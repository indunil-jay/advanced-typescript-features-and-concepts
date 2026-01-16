/**
 * ======================================================
 * Topic: `ThisParameterType` Utility Type
 * ======================================================
 *
 * `ThisParameterType<T>` extracts the type of `this` for a function type `T`.
 * Useful when:
 * - You want to use a function with `this` in a safe, type-checked way
 * - You need to call `.apply` or `.call` safely
 */

/** Function using a `this` parameter */
function toHex(this: Number): string {
  // Convert the number to a hexadecimal string
  return this.toString(16);
}

/**
 * Extract the type of `this` from `toHex`
 * `ThisParameterType<typeof toHex>` => Number
 */
type ToHexThisParam = ThisParameterType<typeof toHex>;

/** Use the extracted type safely */
function numberToString(n: ToHexThisParam): string {
  // Call `toHex` with the correct `this` context
  return toHex.apply(n);
}

/** Example usage */
const result = numberToString(255);
console.log(result); // "ff"

/**
 * ======================================================
 * Notes
 * ======================================================
 *
 * - `ThisParameterType` works only with functions that declare `this`.
 * - Helps avoid `any` when using `.call` / `.apply`.
 * - Often used in **library typing** or **callback utilities**.
 */
