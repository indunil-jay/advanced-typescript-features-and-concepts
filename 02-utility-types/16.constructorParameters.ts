/**
 * ======================================================
 * Topic: Utility Type – `ConstructorParameters<T>`
 * ======================================================
 *
 * `ConstructorParameters<T>` extracts the parameter types of a constructor function
 * (i.e., a class) as a tuple type.
 *
 * Useful when:
 * - You want to infer the arguments needed to instantiate a class
 * - Build factory functions without manually repeating the types
 * - Ensure consistency between class constructor and external usage
 */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/** Extract constructor parameter types */
type PersonConstructorParams = ConstructorParameters<typeof Person>;
/*
  Resulting type:
  [name: string, age: number]
*/

/** Example usage: factory function */
function createPerson(...args: PersonConstructorParams) {
  return new Person(...args);
}

/** Create a new person */
const p = createPerson("Alice", 25);
console.log(p.name, p.age); 
