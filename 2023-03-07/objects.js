
// Map<string, any> 

let obj = {
  a: 1,
  b: false,
  c: "hola",
  subobj: {
    d: null,
    e: undefined
  }
};

console.log('c' in obj);

console.log(obj);

// Añadir campos
console.log(obj.g);
obj.f = "aquí he estao yo";
obj["g"] = "pues yo más";
obj["hola que tal"] = 33;

// Borrar campos
delete obj.c;

// Acceder a campos con un un string
let campo = "f";
obj[campo] = "Yo también";
let estaCampo = campo in obj; // true

console.log(obj);

let obj2 = {
  name: "___",
  ["a b c"]: 237,
  "*popy*": null,
  "abc": 890,
};
obj2.abc = 891;
console.log(obj2);

