function Animal() {

}

Animal.prototype.gruñe = function () {
  console.log("Grrr");
}

function Person(name, age) {
  this.name = name;
  this.age = age;

  // Aquí se hace implícitamente esto:
  // this.__proto__ = Person.prototype
}

Person.prototype.quéTal = function () {
  console.log(`Hola, mi nombre es ${this.name}, qué tal!`);
};

Person.prototype.duérmete = function () {
  this.durmiendo = true;
};

Person.prototype.cansado = true;

// Person extends Animal
Person.prototype.__proto__ = Animal.prototype;

console.log(Person.prototype.constructor);

let p = new Person("James Bond", 27);
p.quéTal();
p.duérmete();
p.gruñe();
console.log(p.cansado);
console.log(p);
