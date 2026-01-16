/**
 * ======================================================
 * Topic: Utility Type – `Readonly`
 * ======================================================
 *
 * `Readonly<T>` makes **all properties immutable**.
 * Once assigned, properties cannot be reassigned.
 *
 * ⚠️ This is a compile-time constraint only.
 * It does NOT freeze objects at runtime.
 */

/** Base type */
type Person = {
  name: string;
  age: number;
};

/**
 * A readonly version of `Person`
 * All properties become `readonly`
 */
const person: Readonly<Person> = {
  name: "Pixey",
  age: 2,
};

/** ❌ Error: Cannot assign to 'age' because it is a read-only property */
person.age = 20;

/**
 * ======================================================
 * Topic: `ReadonlyArray<T>`
 * ======================================================
 *
 * `ReadonlyArray<T>` prevents mutation methods
 * such as `push`, `pop`, `splice`, etc.
 */

/** Readonly array */
const numbers: ReadonlyArray<number> = [1, 2, 3];

/** ❌ Error: Property 'push' does not exist on type 'readonly number[]' */
numbers.push(4);

/** ✅ Allowed: Non-mutating methods */
const doubled = numbers.map(n => n * 2);
const total = numbers.reduce((a, b) => a + b, 0);

/**
 * ======================================================
 * When to use `Readonly`
 * ======================================================
 *
 * ✔ Configuration objects
 * ✔ Constants shared across modules
 * ✔ Function parameters to prevent accidental mutation
 */

