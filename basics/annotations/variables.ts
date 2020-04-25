let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) functions that returns the any type
const json = '{"x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); // { x: 10, y: 20 }

// 2) when we declare a variable on on line
// and initializtate it later
let words = ['red', 'green'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) when we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboreZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboreZero = numbers[i];
  }
}
