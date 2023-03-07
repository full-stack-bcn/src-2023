function copy_object(orig) {
  let result = {};
  for (const field in orig) {
    result[field] = orig[field];
  }
  return result;
}

let a = { uno: 1, dos: 2, tres: 3, cuatro: { x: 0, y: 0 } };

let b = copy_object(a);
console.log(a === b);
console.log(b);
console.log(a.cuatro === b.cuatro);

let c = structuredClone(a);
console.log(a === c);
console.log(c);
console.log(a.cuatro === c.cuatro);

