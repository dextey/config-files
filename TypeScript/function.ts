// argument types and return type
const someFunction = (a: number, b: number): number => {
  return a + b;
};

// A function type is also automatically detemined by type inference in typescript
// but we need to specify annontation for arguments

// Even though it is not specified to add anotation for return
// It is manadory to add a return type if a funciton has to return somthing
// This is mainly use to reduce errors while coding

// This is how we specfy types for function arguments and returns
function anotherfunction(a: number, b: number): number {
  return a - b;
}

// A void return specifies that the funtion doesn't return anuthing
// Even though a void type can have return of NULL and UNDEFINED
const logger = (message: string): void => {
  console.log(message);
};

// This is a rare case we will most probably never have to return type never
// beacause never type is only set when we never ever have to return anything from the value
const throwError = (message: string): never => {
  throw new Error(message);
};

const Profile = {
  name: "Some Name",
  age: 23,
  coords: {
    lat: "34",
    log: "74",
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  age,
  coords: { lat, log },
} = Profile;
