const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting values

const car = carMakers[1];

// Prevent incompatible values
carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), '2020-04-17'];
