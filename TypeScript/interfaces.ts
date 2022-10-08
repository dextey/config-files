// As of now both object contain summary hence the inteface summary can be use to define the type of both objects
// This helps in resuability of the code as shown below
// Here we can note that when a funtion is created as an interface no other properties are considered
// futher is described in line 37
interface summary {
  summary(): string;
}

const Civic = {
  model: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name : ${this.model}`;
  },
};

// Basic Idea of Interfaces

// interface Car {
//   model: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// }

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 32,
  summary(): string {
    return `This drink contain ${this.sugar} grams of sugar`;
  },
};

// The main purpose of interface summary is to identify that any object using the funtion printSummary
// should have the property of funtion summary
// Here interface Summary act as a gate keeper

const printSummary = (item: summary): void => {
  console.log(item.summary());
};

// printCar(Civic);
printSummary(Civic);
printSummary(drink);
