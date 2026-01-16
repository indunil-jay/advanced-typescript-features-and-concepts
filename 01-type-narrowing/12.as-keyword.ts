/**
 * Demonstrates Type Assertions (`as` keyword)
 *
 * Type assertions are a way to tell TypeScript: "Trust me, I know the type."
 * 
 * ⚠️ General Advice:
 * - Avoid unnecessary type assertions—they can bypass type safety.
 * - Use only when you are certain about the type (e.g., DOM elements or API responses).
 */

/** Example 1: Accessing DOM Elements */
const input = document.getElementById('name-input') as HTMLInputElement;
// TypeScript now knows `input` is an HTMLInputElement
input.value = 'Hello world!';

/**
 * Notes:
 * - Without the assertion, TypeScript thinks `getElementById` may return `HTMLElement | null`.
 * - Using `as HTMLInputElement` narrows the type and allows `.value` safely.
 */

/** Example 2: Type assertion with API responses */
interface User {
  name: string;
  age: number;
}

async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://api/users');
  
  // Using `as` here tells TypeScript: "this JSON will match User[]"
  // ⚠️ Be careful: This does not actually validate the data at runtime.
  const data = await response.json() as User[];

  return data;
}

/**
 * Notes:
 * - Type assertion (`as`) does not perform runtime checks.
 * - If the API returns invalid data, you may get runtime errors.
 * - Safer alternative: Use runtime validation (e.g., Zod, Yup) to ensure type safety.
 */
