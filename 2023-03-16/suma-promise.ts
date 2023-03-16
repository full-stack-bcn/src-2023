function suma(a: number, b: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (Number.isNaN(a) || Number.isNaN(b)) {
      reject(`${a} o ${b} no son números`);
      return;
    }
    setTimeout(() => resolve(a + b), 1000);
  });
}

suma(3, NaN).then((resultado) => {
  console.log("Resultado:", resultado);
});

console.log("The End");
