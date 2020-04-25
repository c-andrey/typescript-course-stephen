class Vehicle {
  color: string = 'red';

  honk(): void {
    console.log(this.color);
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('overwrited');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.honk();
