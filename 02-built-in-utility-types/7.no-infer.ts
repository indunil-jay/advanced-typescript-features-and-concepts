/**
 * ======================================================
 * Topic: `NoInfer` Utility Type
 * ======================================================
 *
 * Problem:
 * Sometimes TypeScript **infers a type too widely**, which can
 * lead to undesired behavior.
 *
 * Solution:
 * `NoInfer<T>` prevents TypeScript from inferring a type,
 * forcing the compiler to check it strictly against the provided type.
 *
 * ✅ Useful when you want to **narrow down the allowed types**
 *    in generics and function parameters.
 */




/**
 * Generic function with `NoInfer`
 *
 * - `models: T[]` accepts an array of strings of type `T`.
 * - `defaultModel: NoInfer<T>` prevents TypeScript from widening `T`
 *   when inferring the type for `defaultModel`.
 */
function createCarModel<T extends string>(
  models: T[],
  defaultModel?: NoInfer<T>
) {
  console.log(`Available models: ${models.join(", ")}`);
  if (defaultModel) console.log(`Default model: ${defaultModel}`);
}

/** ✅ Correct usage */
createCarModel(["a", "b", "c"], "a");

/** ❌ Error: "d" is not in the models array */
createCarModel(["a", "b", "c"], "d"); // TypeScript will throw an error
