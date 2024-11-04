let car = {
  name: "hier_car",
  speed: 50,
  accelerate: function () {
    car.speed += 10;
    console.log(car.speed);
  },
  accelerate_more() {
    car.speed += 40;
    console.log(car.speed);
  }, // look at the different ways of defining a funcion to the object
};

car.accelerate();
car.accelerate_more();
