
import fs from 'fs';

fs.readFile('read-file.mjs', (err, data) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Ya tengo los datos", data);
  }
});

console.log("Final");

