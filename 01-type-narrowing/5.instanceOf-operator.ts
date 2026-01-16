/**
 * Demonstrates Type Narrowing Using `instanceof`
 *
 * The `instanceof` operator checks if an object is an instance of a class.
 * TypeScript uses this check to narrow union types to the specific class type.
 */

class Boat {
  floats = true;

  sail() {
    console.log("The boat is sailing!");
  }
}

class Truck {
  rolls = true;

  drive() {
    console.log("The truck is driving!");
  }
}

function instanceofCheck(vehicle: Boat | Truck) {
  if (vehicle instanceof Boat) {
    console.log("This is a Boat.");
    console.log("Floats:", vehicle.floats);
    vehicle.sail(); 
  } else {
    console.log("This is a Truck.");
    console.log("Rolls:", vehicle.rolls);
    vehicle.drive(); 
  }
}


const myBoat = new Boat();
const myTruck = new Truck();

instanceofCheck(myBoat);
// Output:
// This is a Boat.
// Floats: true
// The boat is sailing!

instanceofCheck(myTruck);
// Output:
// This is a Truck.
// Rolls: true
// The truck is driving!
