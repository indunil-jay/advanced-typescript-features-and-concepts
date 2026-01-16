/**
 * ======================================================
 * Topic: Utility Type – `Partial`
 * ======================================================
 *
 * `Partial<T>` makes all properties of a type optional.
 * It is useful when you want to work with incomplete data
 * or update only a subset of fields.
 */

/** Base type */
type Person = {
  name: string;
  age: number;
  location: string;
};

/**
 * `Partial<Person>`
 * All properties of `Person` become optional.
 */
type PartialPerson = Partial<Person>;
/*
  Resulting type:
  {
    name?: string;
    age?: number;
    location?: string;
  }
*/

const updatePerson: PartialPerson = {
  age: 30,
};


/**
 * ======================================================
 * Important Note About `Partial` on Property Types
 * ======================================================
 *
 * `Person['location']` resolves to `string`.
 * Applying `Partial` to a primitive type has no effect,
 * because `Partial<T>` only works on object types.
 */
type PartialAddress = Partial<Person['location']>;
/*
  Resulting type:
  string
 */

/**
 * Correct usage example:
 * If `location` were an object, `Partial` would be meaningful.
 */
type Address = {
  city: string;
  country: string;
};

type PersonWithAddress = {
  name: string;
  age: number;
  location: Address;
};

/**
 * Now `Partial` works as expected on nested object types.
 */
type PartialAddressObject = Partial<PersonWithAddress['location']>;
/*
  Resulting type:
  {
    city?: string;
    country?: string;
  }
 */
