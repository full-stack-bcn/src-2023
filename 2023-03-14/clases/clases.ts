
class Animal {
  weight: number;

  constructor(weight: number = 0.0) {
    this.weight = weight;
  }

  gruñe() {
    console.log("Grrr");
  }
}

class Person extends Animal {
  name: string;
  age: number;
  durmiendo: boolean = false;

  constructor(name: string, age: number, weight: number) {
    super(weight); // constructor de Animal
    this.name = name;
    this.age = age;
  }

  quéTal() {
    console.log(`Hola, mi nombre es ${this.name}, qué tal!`);
  }

  duérmete() {
    this.durmiendo = true;
  }
}

class Point2D {
  x: number = 0;
  y: number = 0;
}

let pt = new Point2D();
console.log(pt);

let p = new Person("James Bond", 27, 0.0);
p.quéTal();
p.gruñe();
console.log(p);