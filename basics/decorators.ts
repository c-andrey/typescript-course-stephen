@classDecorator
class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError('Ops')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator velo: number
  ): void {
    if (speed === 'fast') {
      console.log('asd');
    } else {
      console.log('dsa');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}
