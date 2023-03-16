
function sumaSync(a: number, b: number): number {
  return a + b;
}

function suma(a: number, b: number, callback: (r: number) => void) {
  setTimeout(() => callback(a + b), 2000);
}

console.log("Empieza la función");

let r1 = sumaSync(10, 20);
console.log("Resultado 1:", r1);

// La función suma no espera a tener el resultado y seguimos con el programa
suma(10, 20, (r2) => {
  console.log("Resultado 2:", r2);
});

console.log("Termina la función");

