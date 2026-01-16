/**
 * ======================================================
 * Topic: Utility Types – `Exclude` & `Extract`
 * ======================================================
 *
 * These utility types are mainly used with **union types**.
 * They help you **filter** members of a union.
 */

/**
 * ------------------------------------------------------
 * `Exclude<T, U>`
 * ------------------------------------------------------
 *
 * Removes from `T` all union members that are assignable to `U`.
 *
 * Think of it as:
 * 👉 "T minus U"
 */

/** Base union type */
type Color = "red" | "green" | "blue";

/**
 * Remove `"red"` from `Color`
 */
type NotRed = Exclude<Color, "red">;
/*
  Resulting type:
  "green" | "blue"
 */



/**
 * ------------------------------------------------------
 * `Extract<T, U>`
 * ------------------------------------------------------
 *
 * Keeps from `T` only the union members that are assignable to `U`.
 *
 * Think of it as:
 * 👉 "T ∩ U" (intersection)
 */

/** Base union type */
type Vehicle = "car" | "truck" | "motorcycle" | "bicycle";

/**
 * Extract only motorized vehicles
 */
type MotorizedVehicle = Extract<Vehicle, "car" | "truck">;
/*
  Resulting type:
  "car" | "truck"
 */



/**
 * ======================================================
 * When to use these
 * ======================================================
 *
 * ✔ API response filtering
 * ✔ Feature flags
 * ✔ Permission-based logic
 * ✔ Conditional type construction
 */
