/**
 * ======================================================
 * Topic: Utility Type – `Required`
 * ======================================================
 *
 * `Required<T>` makes **all properties required**.
 * It is the opposite of `Partial<T>`.
 *
 * Useful when:
 * - You receive partial data (e.g., from a form or API)
 * - You want to enforce that all fields exist before
 *   performing critical operations
 */

/** Base type with optional properties */
type User = {
  name?: string;
  age?: number;
  location?: string;
};

/**
 * `Required<User>`
 * All optional properties become required.
 */
type RequiredUser = Required<User>;
/*
  Resulting type:
  {
    name: string;
    age: number;
    location: string;
  }
*/

/** ❌ Error: missing required properties */
const incompleteUser: RequiredUser = {
  name: "Alice",
};

/** ✅ Correct: all properties must be provided */
const completeUser: RequiredUser = {
  name: "Alice",
  age: 25,
  location: "Colombo",
};

