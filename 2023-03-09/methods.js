"use strict";

const saluda = function () {
  console.log(`Hola, soy ${this.name}, qué tal!`);
}

let person = {
  name: "James",
  saluda,
};

person.saluda(); // left-object ('person')
saluda();        // NOO left-object