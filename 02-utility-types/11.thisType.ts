/**
 * ======================================================
 * Topic: `ThisType` Utility Type
 * ======================================================
 *
 * `ThisType<T>` is a **marker type** for contextual `this`.
 * It does NOT create a value at runtime, but tells TypeScript
 * what type `this` should have inside object literals.
 *
 * ✅ Useful when:
 * - You have object literals with methods that use `this`
 * - You want type safety without repeatedly annotating `this` in every method
 * - You want better autocomplete and error checking in IDE
 */

/** Example logger object */
type Logger = {
  logInfo: () => string;
  logError: () => string;
};

/**
 * Here, we combine Logger with ThisType<{ message: string }>
 * - Methods can safely use `this.message` without declaring `this` explicitly
 */
const logger: Logger & ThisType<{ message: string }> = {
  logInfo() {
    return `Info: ${this.message}`;
  },
  logError() {
    return `Error: ${this.message}`;
  },
};

//long format
// const logger: Logger  = {
//   logInfo(this:{message:string}) {
//     return `Info: ${this.message}`;
//   },
//   logError(this:{message:string}) {
//     return `Error: ${this.message}`;
//   },
// };

/**
 * ======================================================
 * Using `logger` with a context
 * ======================================================
 *
 * We can specify the `this` type when creating an object
 * using `Object.assign` or a similar pattern.
 */
const loggerWithMessage = Object.assign(logger, { message: "Hello world" });

console.log(loggerWithMessage.logInfo());   // "Info: Hello world"
console.log(loggerWithMessage.logError());  // "Error: Hello world"

/**
 * ======================================================
 * Notes
 * ======================================================
 *
 * - `ThisType<T>` is only meaningful **inside object literals**
 * - Requires `--noImplicitThis` compiler option for full safety
 * - Does NOT exist at runtime — it's purely a TypeScript typing helper
 * - Perfect for **mixins**, **DSLs**, or **configuration objects** that rely on `this`
 */
