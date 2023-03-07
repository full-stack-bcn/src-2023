
type Palabra = string;

type ExclamateFunction = (s: string, numexcl?: number) => string;

let exclama_t : ExclamateFunction = function (str, numExcl = 1) {
  let result = str + "!".repeat(numExcl);
  return result;
}

function max2_t(a: number, b: number): number {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(exclama_t("hola", 7));
console.log(exclama_t("adios", 1));
console.log(exclama_t("To be or not to be"));
console.log(exclama_t("pardiez"));