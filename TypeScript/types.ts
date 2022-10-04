const today = new Date();

console.log(today.getDate());

const person = {
  age: 20,
};

// Annotation and Inference

let apples: number = 5;

apples = 6;
// The assignment doesn't work because of type number
// apples = 'apples'

let speed: string = "fast";

// THE NULL TYPE

let nothing: null = null;

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Annotation for funtion

const justFunction: (i: number) => void = (i: number) => {
  console.log(i);
};

const pointString = '{"x": 54,"y": 48}';
const position: { x: number; y: number } = JSON.parse(pointString);

console.log(position);

let numbers = [-10, 30, -30];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] > 0) {
    numberAboveZero = numberAboveZero[i];
  }
}
