
function exclama(str, numExcl = 1) {
  let result = str + "!".repeat(numExcl);
  return result;
  str = "";
  numExcl = 3;
}

function max2(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(exclama("hola", 7));
console.log(exclama("adios", 1));
console.log(exclama("To be or not to be"));
console.log(exclama("pardiez"));