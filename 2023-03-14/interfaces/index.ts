
interface Animal {
  gruñe(): void;
}

function molesta(a: Animal) {
  console.log("[Molesto al animal]");
  a.gruñe();
}

class Person implements Animal {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  gruñe(): void {
    console.log(`Grrrr`);
  }
}

class Reloj {
  private hora: number;
  private minutos: number;

  constructor(hora: number, minutos: number) {
    this.hora = hora;
    this.minutos = minutos;
  }
}

let p = new Person("James Bond", 27);
let r = new Reloj(14, 45);
molesta(p);
// p.#age = 30; // ERROR: age es privado (dinámico y estático)
// r.hora = 32; // ERROR: hora es privado aquí



