/**
 * Demonstrates Type Narrowing Using the `in` Operator
 *
 * The `in` operator can be used to check whether a specific property
 * exists in an object. TypeScript uses this check to narrow union types
 * to a specific type that contains the property.
 */

type Car = {
  numberOfDoors: number;
};

type MotorCycle = {
  hasWindshield: boolean;
};


function checkVehicle(vehicle: Car | MotorCycle) {
  if ("numberOfDoors" in vehicle) {
    // Inside this block, TypeScript knows `vehicle` is a Car
    console.log(`This vehicle is a Car with ${vehicle.numberOfDoors} doors.`);
  } else {
    // Here, TypeScript infers `vehicle` is a MotorCycle
    console.log(
      `This vehicle is a MotorCycle. Has windshield: ${vehicle.hasWindshield}`
    );
  }
}


checkVehicle({ numberOfDoors: 4 }); 
checkVehicle({ hasWindshield: true });
