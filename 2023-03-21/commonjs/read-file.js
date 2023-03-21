
const { readFileSync } = require('fs');

const buffer = readFileSync('./datos.json');
const datos = JSON.parse(buffer.toString());
console.log(datos);