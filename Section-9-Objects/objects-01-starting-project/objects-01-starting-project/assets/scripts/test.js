const variable = 'gamer';

const person = {
  name: "Ivan",
  age: 25,
  hobbies: ['Eating', 'Coding'],
  greet: () => {
    console.log('HELLO!');
  },
  1.25: 'nice',
  [variable]: 'noob'
};
person.greet();
console.log(person.name);
person.isBusy = false;
console.log(person.isBusy);
person.isBusy = true;
person.isBusy = null;
person.isBusy = undefined;
delete person.isBusy;
console.log(person[variable]);
console.log(person[1.25]);

