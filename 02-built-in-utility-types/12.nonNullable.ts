/**
 * ======================================================
 * Topic: Utility Type – `NonNullable<T>`
 * ======================================================
 *
 * `NonNullable<T>` removes `null` and `undefined` from a type.
 * Useful when you want to enforce that a value is always defined.
 */

/** Union type including null and undefined */
type IdOrNull = string | number | null | undefined;

/** Remove null and undefined */
type Id = NonNullable<IdOrNull>;
/*
  Resulting type:
  string | number
*/

/** Example usage */
function printId(id: Id) {
  console.log(`ID is: ${id}`);
}

/** ✅ Allowed */
printId(123);
printId("abc");

/** ❌ Error: Argument of type 'null' is not assignable to parameter of type 'string | number' */
// printId(null);

/** ❌ Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number' */
// printId(undefined);

/**
 * ======================================================
 * Notes
 * ======================================================
 *
 * - NonNullable<T> is shallow: only removes `null` and `undefined` from the top-level union
 * - Does NOT affect nested properties
 * - Often used with:
 *    - API responses
 *    - Optional parameters after validation
 *    - Removing undefined in mapped types
 */
