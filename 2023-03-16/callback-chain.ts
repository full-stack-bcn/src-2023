const asum = (a, b, callback) => {
	setTimeout(() => callback(a + b), 1000);
};
const asub = (a, b, callback) => {
	setTimeout(() => callback(a - b), 1000);
};
const amul = (a, b, callback) => {
	setTimeout(() => callback(a * b), 1000);
};

// 5 * (4 + (10 - 7))
// mul(5, sum(4, sub(10, 7)))

asub(10, 7, (r1) => {
  asum(4, r1, (r2) => {
    amul(5, r2, (resultado) => {
      console.log("Resultado:", resultado);
    });
  });  
});
