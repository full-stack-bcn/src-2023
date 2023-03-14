const animal = {
  eat() { console.log("nyam nyam"); },
  isSleeping() {
    return this.sleeping;
  }
}

const rabbit = {
  jump() { 
    console.log("Bunny Boing!");
  },
  sleep() {
    this.sleeping = true;
  },
  wake() {
    this.sleeping = false;
  },
  __proto__: animal,
}

const bugsBunny = {
  name: "Bugs Bunny",
  __proto__: rabbit,
}

console.log(bugsBunny);
bugsBunny.sleep();
console.log(bugsBunny.isSleeping());
console.log(rabbit);
console.log(bugsBunny);
