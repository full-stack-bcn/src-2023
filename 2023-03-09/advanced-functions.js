
const suma = function (a, b) { 
  console.log(a + b); 
};

(suma)(5, 6);
// 1. Obtener lo que haya en 'suma'
// 2. Una vez tengo la función: la llamo.

const adiciona = suma;
adiciona(15, 25);

const fabrica = function (x) {
  return function () {
    console.log(`fabrica ${x}`);
  }
};

(fabrica(7))();

const A = [
  function (a, b) { return a + b; },
  function (a, b) { return a - b; },
  function (a, b) { return a * b; },
];

for (const f of A) {
  console.log(f(5, 7));
}