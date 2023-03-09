const fsuma = function (a, b) {
  return a + b;
};
const asuma = (a, b) => a + b;

const funcArray = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];

const menor = (a, b) => a < b;
const adams = () => 42;
const id = (x) => x;

adams();
menor(1, 3);
id("hola");

const showTwoLines = () => {
  console.log("line 1");
  console.log("line 2");
};

const makePerson = (name, age) => ({
  type: "Person",
  name,
  age,
});

console.log(makePerson("James", 27));
