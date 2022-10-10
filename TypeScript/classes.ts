class Vehicle {
  // methods/funtions in classes can be private protected or public
  // by default every methods are set to public

  constructor(public color: string) {}

  drive(): void {
    console.log("stuuu stuuu tuu tu");
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  // color:string;
  // public in constructor helps to shorted up code as shown below
  // by this way it allows to
  constructor(public wheels: number, color: string) {
    super(color);
    // this.color = _color;
  }

  drive(): void {
    console.log("vroom");
    this.honk();
  }
}

const car = new Car(4, "blue");

car.drive();
console.log(car.color, car.wheels);
