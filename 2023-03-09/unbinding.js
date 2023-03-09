
let carol = {
  name: "Carol",
  sayHi: function () {
    console.log(`Hi, I'm ${this.name}, how are you?`);
  },
};

let sayHi = carol.sayHi;
let carolSayHi = sayHi.bind(carol);

carolSayHi();

let bella = {
  name: "Bella",
  sayHi: carolSayHi,
};
// No left-object
bella.sayHi();


