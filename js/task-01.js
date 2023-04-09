const person = {
  name: "Anton",
  age: 34,
  gender: "мужик",

  introduce() {
    return `Мене звати ${this.name}, мені ${this.age} років я ${this.gender}`;
  },

  changeName(newName) {
    this.name = newName;
  },
  changeAge(newAge) {
    this.age = newAge;
  },
};

console.log(person.introduce());

person.changeName("Victor");
person.changeAge(40);

console.log(person.introduce());
