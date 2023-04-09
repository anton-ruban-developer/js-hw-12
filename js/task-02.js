const car = {
  brand: "Mazda",
  model: 6,
  year: 2012,
  speed: 80,

  showInfo() {
    return `Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`;
  },
};

const location = {
  city: "Kharkiv",
  distance: 762,
};

function showTime() {
  const time = location.distance / car.speed;
  console.log(
    `Автомобіль ${this.brand}, марки ${this.model} дістанеться міста ${location.city} за ${time.toFixed(2)} годин`
  );
}

Object.assign(car, { showTime });
car.showInfo();
car.showTime();
