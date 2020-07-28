class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}
class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b']);
const arr = new ArrayOfAnything(['a', 'b']);

// generics with functions

function printStrings(arr: string[]): void {
  arr.map((item: string) => {
    console.log(item);
  });
}
function printNumbers(arr: number[]): void {
  arr.map((item: number) => {
    console.log(item);
  });
}

function printAnything<T>(arr: T[]): void {
  arr.map((item: T) => {
    console.log(item);
  });
}

printAnything<string>(['a', 'b']);
printAnything([1, 2]);

// generic constaraints

class Cars {
  print() {
    console.log('I am a car');
  }
}
class House {
  print() {
    console.log('I am a houise');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.map((item: T) => {
    item.print();
  });
}

printHousesOrCars([new House(), new Cars()]);
