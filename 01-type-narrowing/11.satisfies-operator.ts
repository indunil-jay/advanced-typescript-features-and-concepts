/**
 * Demonstrates Using the `satisfies` Operator
 *
 * Problem: 
 * You want to ensure that an object conforms to a type, 
 * but you also want TypeScript to **infer the most specific type** 
 * possible for the object.
 *
 * Solution: 
 * Use the `satisfies` operator.
 * - `satisfies` checks that the expression meets the target type.
 * - Unlike `as Type`, it does not widen the type unnecessarily.
 * - If the expression is incompatible, TypeScript throws an error.
 */

type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

/** Using `satisfies` to ensure the object matches `Person` */
const person = {
  name: "Holen",
  age: 30,
  // extra properties are allowed here but will be ignored by Person type
//   city: "New York"
} satisfies Person;

/** TypeScript ensures `person` satisfies Person type */
printPerson(person); // Output: Name: Holen, Age: 30

/**
 * Benefits of `satisfies` over type assertion (`as Person`):
 * 1. Keeps the inferred type as narrow as possible.
 *    - `person` retains `city` property in its inferred type.
 * 2. Ensures type compatibility at compile-time.
 * 3. Helps catch mistakes where a property is missing or mistyped.
 */

/** Example of an error */
const invalidPerson = {
  name: "John",
  // age is missing → TypeScript will throw an error
  // age: 25
} satisfies Person; // ❌ Error: Property 'age' is missing


type Keys  = "id"|"name"|"email";

const  personData = {
  id:1,email:'test@gmail.com',name:"test name"
} satisfies Record<Keys,string|number>


personData.id.toFixed(1)
personData.email.toLocaleLowerCase()