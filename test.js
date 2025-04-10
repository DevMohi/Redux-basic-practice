// import { produce } from "immer";

// const employee = {
//   name: "Mir",
//   address: { country: "Bangladesh", city: "Dhaka" },
// };

// const employee2 = produce(employee, (draft) => {
//   draft.name = "Mezba";
//   draft.address.city = "Ctg"
// });

// console.log(employee);
// console.log(employee2);

//currying  -> Function curry
//parameter kom mane function better

// Normal function
// const add = (a, b) => a+b;

//Curried
// const add = (a) => (b) => a +b
// console.log(add(3)(5))

function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(3)(5))

