
for (let i = 0; i < 100; i++) {
  module.exports[`f${i}`] = (x) => x + i;
}