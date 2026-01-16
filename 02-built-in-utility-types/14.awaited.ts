/**
 * ======================================================
 * Topic: Utility Type – `Awaited<T>`
 * ======================================================
 *
 * `Awaited<T>` recursively unwraps the type of a Promise.
 * Useful when:
 * - You want to get the resolved type of a promise
 * - You are working with nested promises
 * - You want strong type safety with async/await
 */

/** Example base type */
type User = {
  id: number;
  name: string;
};

/** A Promise returning a User */
type UserPromise = Promise<User>;

/** Unwrap the promise */
type AwaitedUser = Awaited<UserPromise>;
/*
  Resulting type:
  {
    id: number;
    name: string;
  }
*/

/** Example with nested promises */
type NestedPromise = Awaited<Promise<Promise<number>>>;
/*
  Resulting type:
  number
*/

/** Example usage in a function */
async function fetchUser(): Promise<User> {
  return { id: 1, name: "John Doe" };
}

async function logUser() {
  const user: Awaited<ReturnType<typeof fetchUser>> = await fetchUser();
  console.log(user.id, user.name); // ✅ fully typed
}

/**
 * ======================================================
 * Notes
 * ======================================================
 *
 * - `Awaited<T>` is recursive: it unwraps nested promises
 * - Useful when working with:
 *    - `Promise.all`
 *    - Async API calls
 *    - Generic async functions
 * - Helps TypeScript understand **the actual resolved type**
 */
