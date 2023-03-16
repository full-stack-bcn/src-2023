
import fs from 'fs';

fs.readFile('fich1.txt', (err, data1) => {
  if (err) {
    console.error(err);
    return;
  }
  const filename = data1.toString().trim();
  fs.readFile(filename, (err, data2) => {
    if (err) {
      console.error(err);
      return;
    }
    const content = data2.toString();
    console.log("Contenido del fichero 2:", content);
  })
});
