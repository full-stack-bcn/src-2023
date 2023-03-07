function sayHi(person) {
  if (person === 'Adolf Hitler') {
    return;
  }
  console.log('Oh hi ${person}!');
}

console.log(sayHi("Adolf Hitler"));