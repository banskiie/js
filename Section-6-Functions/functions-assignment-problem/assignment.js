const sayHello1 = name => console.log(`Hi ${name}!`);

const sayHello2 = (greeting, name = 'Ivan') => console.log(`${greeting} ${name}!`);

const sayHello3 = () => console.log(`Hi Ivan!`);

const sayHello4 = name => `Hi ${name}!`;

const sayHello5 = (greeting, name = 'Ivan') => console.log(`${greeting} ${name}!`);

sayHello1('Ivan');
sayHello2('Hi', 'Ivan');
sayHello3();
console.log(sayHello4('Ivan'));
sayHello5('Hi');

const checkInput = (cb, ...strings) => {
  let message = '';
  for (string of strings) {
    if (!string) {
      return;
    }
    message += string + ' ';
  }
  cb(message);
};

checkInput((msg) => {
  console.log(msg);
  console.log('No empty strings');
},
  'Ivan',
  'Wow',
  'Wtf'
);

checkInput((msg) => {
  console.log(msg);
  console.log('No empty strings');
},
  'Ding',
  'Dong',
  ''
);


