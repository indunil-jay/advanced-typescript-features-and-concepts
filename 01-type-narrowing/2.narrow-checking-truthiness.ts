
/**
 * Demonstrates type narrowing using a truthy/falsy check.
 *
 * The `value` parameter is a union type:
 *  - string
 *  - null
 *  - undefined
 *
 * When we use `if (value)`, TypeScript performs
 * control-flow-based type narrowing.
 */
function checkType(value: string | null | undefined) {
  if (value) {
    /**
     * Inside this block:
     * - `value` is narrowed to `string`
     * - Empty strings ("") are excluded because they are falsy
     */
    console.log(`Value exists and the value is: ${value}`);
  } else {
    /**
     * This block runs when `value` is:
     * - "" (empty string)
     * - null
     * - undefined
     *
     * Important:
     * An empty string is also a falsy value,
     * so it falls into this block.
     */
    console.log(`Value does not exist. Value is: ${value}`);
  }
}

/**
 * ------------------------------------------------------
 * IMPORTANT NOTE
 * ------------------------------------------------------
 *
 * If you want to allow empty strings but exclude only
 * `null` and `undefined`, do NOT use a truthy check.
 *
 * Use an explicit null check instead:
 *
 * if (value !== null && value !== undefined) { ... }
 */

/**
 * ======================================================
 * TRUTHY VALUES IN JAVASCRIPT / TYPESCRIPT
 * ======================================================
 *
 * Truthy values evaluate to `true` in a boolean context.
 * TypeScript uses these checks to narrow types.
 *
 * Value                 | Data Type | Explanation
 * ----------------------|-----------|------------------------------
 * true                  | Boolean   | Literal boolean true
 * Non-zero numbers      | Number    | e.g. 1, -3, 999, -234
 * Non-empty strings     | String    | "hello", " " (space is truthy)
 * []                    | Object    | Empty array is truthy
 * [1, 2, 3]             | Object    | Non-empty array
 * {}                    | Object    | Empty object is truthy
 * { key: "value" }      | Object    | Non-empty object
 * function () {}        | Function  | Functions are always truthy
 * Infinity, -Infinity   | Number    | Valid numeric values
 * Symbol()              | Symbol    | All symbols are truthy
 * Non-zero BigInt       | BigInt    | e.g. 4141414n, 8279402920n
 */

/**
 * ======================================================
 * FALSY VALUES IN JAVASCRIPT / TYPESCRIPT
 * ======================================================
 *
 * Falsy values evaluate to `false` in a boolean context.
 *
 * Value         | Data Type | Explanation
 * --------------|-----------|-------------------------------
 * false         | Boolean   | Literal boolean false
 * 0             | Number    | Zero is falsy
 * -0            | Number    | Negative zero is also falsy
 * 0n            | BigInt    | Zero BigInt (e.g. 0n)
 * ""            | String    | Empty string
 * null          | Null      | Explicit absence of value
 * undefined     | Undefined | Declared but not assigned
 * NaN           | Number    | Invalid numeric result
 * document.all  | Object   | Browser-specific falsy value
 */

/**
 * ======================================================
 * SUMMARY
 * ======================================================
 *
 * - Truthy/falsy checks are useful for quick validation
 * - They automatically narrow union types in TypeScript
 * - Empty strings are falsy and often cause bugs
 * - Prefer explicit checks when precision matters
 */
