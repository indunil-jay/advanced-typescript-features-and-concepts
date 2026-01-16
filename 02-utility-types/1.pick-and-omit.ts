/**
 * ======================================================
 * Topic: Utility Types – `Pick` and `Omit`
 * ======================================================
 *
 * TypeScript provides utility types to help transform
 * existing types without rewriting them.
 *
 * `Pick`  – Selects specific properties from a type
 * `Omit`  – Removes specific properties from a type
 */

/** Base type */
type User = {
  id: number;
  name: string;
  age: number;
};

/**
 * `Pick<T, K>`
 * Creates a new type by picking only the specified keys
 * from an existing type.
 */
type UserWithoutAge = Pick<User, "id" | "name">;
/*
  Resulting type:
  {
    id: number;
    name: string;
  }
*/

/**
 * `Omit<T, K>`
 * Creates a new type by removing the specified keys
 * from an existing type.
 */
type UserWithoutId = Omit<User, "id">;
/*
  Resulting type:
  {
    name: string;
    age: number;
  }
*/

const userBasicInfo: UserWithoutAge = {
  id: 1,
  name: "Alice",
};

const userProfile: UserWithoutId = {
  name: "Bob",
  age: 25,
};
