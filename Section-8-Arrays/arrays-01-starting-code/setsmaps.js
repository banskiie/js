// const ids = new Set([4, 2, 3]);
// // console.log(ids)
// // console.log(ids.has(1))
// // console.log(ids.entries());

// for (const entry of ids.entries()) {
//     console.log(entry[0]);
// }

// const person1 = { name: 'Ivan' };
// const person2 = { name: 'Patricia' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]], [person2, [{ job: "branch cashier", salary: 12000 }]]]);

// personData.set('hello', [{ greeting: 'hi', skyColor: 'blue' }]);
// // console.log(personData);
// // console.log(personData.get(person1));
// // for (const [key, value] of personData.entries()){
// //     console.log(key, value);
// // }

// for (const key of personData.keys()) {
//     console.log(key);
// }

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

const personData = new WeakMap()
personData.set(person, 'Extra Info!');
console.log(personData);