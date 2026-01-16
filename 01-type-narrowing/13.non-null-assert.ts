/**
 * Demonstrate Non-Null Assertion (`!`)
 *
 * Problem:
 * `document.getElementById` may return `HTMLElement | null`.
 * Accessing `.innerHTML` directly may cause a compile-time error.
 *
 * Solution:
 * Use the **non-null assertion operator (`!`)** to tell TypeScript:
 * "I know this value is not null."
 *
 * ⚠️ Caution:
 * Non-null assertions bypass safety checks.
 * If the element is actually null at runtime, it will throw an error.
 */

const element = document.getElementById('text-placeholder')!; // Non-null assertion
element.innerHTML = "Enter message here.";

/**
 * Safer alternative using optional chaining:
 */
const safeElement = document.getElementById('text-placeholder');
safeElement?.innerHTML = "Enter message here."; // Will do nothing if null

/**
 * Best Practices:
 * 1. Use `!` only when you are absolutely sure the element exists in the DOM.
 * 2. Prefer runtime checks (`if (element) {...}`) or optional chaining (`?.`) for safety.
 * 3. Avoid `!` in general-purpose code where null is possible.
 */
