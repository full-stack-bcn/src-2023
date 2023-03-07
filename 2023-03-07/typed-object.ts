type Pos2D = { x: number; y: number };

let pos: Pos2D = {
  x: 0.5, // ERROR: fields can be 'x' and 'y' only
  y: 0.7,
};

type Person = {
  first: string;
  last: string;
  age?: number; // this field is optional
};

let person: Person = {
  first: "James",
  last: "Bond",
};

let a = 10;

let obj17 = {
  a: 1,
  b: true,
  c: "hi",
};

interface Cerveza {
  name: string;
  grado: number;
  readonly origin: string;
}

let cerv: Cerveza = {
  name: "Voll-Damm",
  grado: 7,
  origin: "Barcelona",
};

let jsonData1 = `
{
  "firstName": "James",
  "secondName": "Bond",
  "age": 28,
  "missions": [
    "Miami",
    "Berlin",
    "Acapulco"
  ]
}
`;
let jsonData2 = `42`;

let jbond = JSON.parse(jsonData1);
let num = JSON.parse(jsonData2);
console.log(jbond);
console.log(num);

console.log(JSON.stringify(cerv, null, 2));