// Fuente: https://gist.github.com/Klerith/f691b27c2a1d799e304fbae9a8ebc12b

import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle, Ford } from "./06-liskov";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(4),
    new Ford(5),
  ];

  printCarSeats(cars);
})();
