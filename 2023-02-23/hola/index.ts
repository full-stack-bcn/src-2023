let a = 1;
let s = "hola";
let b = false;

let frase = "Y Manuel dijo: pardiez!";
let frase2 = "Y Manuel dijo: pardiez!";

console.log(a, s, b);
console.log(frase);
console.log(frase2);

let total = 100;
console.log(`El total es ${total * 10}, eso es.`);
console.log("El total es ${total}.");

console.log(`<div>El total es <code>${total}</code></div>`);

console.log(typeof total);

let x : number = 3;
let y : string = "sadf";
let z : boolean | null = null;
console.log(x, y, z);

function suma(a: number, b: number) {
  return (a + b);
}

function sumaGenerica(a: any, b: any) {
  return a + b;
}

let x2;
x2 = 1;
x2 = "slkdjf";
x2 = true;
x2 = null;

let x3, x4 = 3, x5 = "hola";
x3 = true;
x4 = 90;
x5 = String(123);

const CONTENT_FOLDER = '/home/data/content';

const texto = `${frase} y luego ${frase2}`;
console.log(texto);

let año = 2023;
console.log(año);






