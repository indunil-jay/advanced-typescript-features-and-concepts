/**
 * ======================================================
 * Topic: String Manipulation Utility Types
 * ======================================================
 *
 * These utility types operate on **string literal types**.
 * They allow you to transform string types at the type level
 * (not at runtime).
 *
 * ⚠️ Works best with literal types, not with `string`.
 */

/**
 * ------------------------------------------------------
 * `Uppercase<T>`
 * ------------------------------------------------------
 *
 * Converts all characters in a string literal type to uppercase.
 */

type UpperCaseMessage = Uppercase<"hello world">;
/*
  Result:
  "HELLO WORLD"
 */

/**
 * ------------------------------------------------------
 * `Lowercase<T>`
 * ------------------------------------------------------
 *
 * Converts all characters in a string literal type to lowercase.
 */

type LowerCaseMessage = Lowercase<"HELLO world">;
/*
  Result:
  "hello world"
 */

/**
 * ------------------------------------------------------
 * `Capitalize<T>`
 * ------------------------------------------------------
 *
 * Converts the first character of a string literal type to uppercase.
 */

type CapitalizedMessage = Capitalize<"hello world">;
/*
  Result:
  "Hello world"
 */

/**
 * ------------------------------------------------------
 * `Uncapitalize<T>`
 * ------------------------------------------------------
 *
 * Converts the first character of a string literal type to lowercase.
 */

type UnCapitalizedMessage = Uncapitalize<"Hello WORLD">;
/*
  Result:
  "hello WORLD"
 */

/**
 * ======================================================
 * Important Notes
 * ======================================================
 *
 * ✔ These utilities work at **compile time**
 * ✔ They do NOT change runtime values
 * ✔ Best used with literal types or `as const`
 *
 */

