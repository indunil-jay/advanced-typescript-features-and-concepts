/**
 * ======================================================
 * Topic: Utility Type – `Parameters<T>`
 * ======================================================
 *
 * `Parameters<T>` extracts the types of a function's parameters
 * as a tuple type.
 *
 * Useful when:
 * - You want to reuse or manipulate function parameters' types
 * - Building higher-order functions or wrappers
 * - Avoid duplicating types
 */

/** Example 1: Function type */
type LogFunction = (message: string, color: "black" | "red") => void;

/** Extract parameter types */
type LogFunctionParams = Parameters<LogFunction>;
/*
  Resulting type:
  [message: string, color: "black" | "red"]
*/

const args: LogFunctionParams = ["Hello world", "red"];

function log(...args: LogFunctionParams) {
  const [message, color] = args;
  console.log(`%c${message}`, `color: ${color}`);
}

/** Call log with typed arguments */
log(...args);

/** ------------------------------------------------------ */

function greet(name: string, age: number): void {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

/** Extract parameter types */
type GreetParams = Parameters<typeof greet>;
/*
  Resulting type:
  [name: string, age: number]
*/

const greetArgs: GreetParams = ["Alice", 30];
greet(...greetArgs);
