// Initialsing array with values will automatically add type
const carMakers = ["ford", "toyota", "suzuki", "chevy", "Honda"];

// Array can also set of any types
const dates = [new Date(), new Date()];

// 2D array is also possible

const cars = [["mustang", "camero", "viper"]];

// Prevents form incompatable values to be entered
// carMakers.push(100);

carMakers.map((car: string): void => {
  console.log(car.toUpperCase());
});

// Multiple types in array

const importantDates = [new Date(), "2030-30-2", 4];

console.log(importantDates);

// If we want to initailze array with multipe array types
const multiArray: (string | Date)[] = [];

// We can create types with Type Keyword as shown below
type Drink = [string, boolean, number];

//this is how tuples is order array can be use
const sprite: Drink = ["brown", true, 32];
const pepsi: Drink = ["clear", false, 34];
