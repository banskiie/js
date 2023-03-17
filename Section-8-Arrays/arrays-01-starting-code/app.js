// const numbers = [1, 2, 3,];
// console.log(numbers);

// const moreNumbers = new Array(5); // []
// const moreNumbers1 = Array(1, 2);
// console.log(moreNumbers)

// const yetMoreNumbers = Array.of(1, 2, 3);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const moreNumbers = Array.from('HELLO');
// console.log(moreNumbers);

// const arrayListItem = Array.from(listItems);
// console.log(arrayListItem);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// // const poppedValue = hobbies.pop();
// // hobbies.shift()
// hobbies[1] = 'Basketball';
// // hobbies[5] = 'Dancing'; // rarely used

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 2, 4, -10, 1, 3.78];
// // const storedResults = testResults.slice();
// const newResults = [2, 4, 5];
// const newestResults = [40, 20];
// // testResults.push(100);

// const concatResults = testResults.concat(newResults, newestResults);

// console.log(concatResults);
// console.log(testResults.indexOf(1));
// console.log(testResults.lastIndexOf(1));

// console.log(testResults.includes(10.99));

// const personData = [{ name: 'Cris' }, { name: 'Hiroshi' }];
// const cris = personData.find((person, idx, persons) => {
//     return person.name === 'Cris';
// });
// const hiroshiIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Hiroshi';
// });

// cris.name = "Jemuel";
// console.log(cris, personData);
// console.log(hiroshiIndex)

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) }
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);


// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) }
//     return priceObj;
// });

// console.log(taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }); //lowest to highest
// const reversedSortedPrices = sortedPrices.reverse();
// console.log(sortedPrices);

// const filteredArray = prices.filter((price, idx, prices) => {
//     return price > 6;
// });
// const filteredArrayAlt = prices.filter(price => price > 6);

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach(price => sum += price);
// // console.log(sum);

// const sum = prices.reduce((prevVal, curVal) => prevVal + curVal, 0).toFixed(2);

// console.log(sum);

// const data = 'newyork;10.99;2000';

// const transformedData = data.split(';', 2)
// for (let i = 0; i < transformedData.length; i++) {
//   if (isNaN(+transformedData[i])) {
//     continue;
//   }
//   else {
//     transformedData[i] = +transformedData[i];
//   }
// }

// console.log(transformedData);

// const nameFragments = ['Shand', 'Ivan', 'Pabia', 'Sinohon'];
// const myFullName = nameFragments.join(' ');
// // console.log(myFullName);

// const copiedNameFragments = ['Jemuel', ...nameFragments];

// // console.log(Math.min(...prices))

// console.log(copiedNameFragments)

// const persons = [{ name: 'Ivan', age: 24 }, { name: 'Jemuel', age: 22 }];
// const copiedPersons = [...persons.map(person => ({name: person.name, age: person.age}))];
// persons.push({ name: 'Cris', age: 23 });
// persons[0].age = 19;
// console.log(persons);
// console.log(copiedPersons);

// const nameFragments = ['Shand', 'Ivan', 'Sinohon', 24, ['Coding', 'Gaming']];
// const [firstName, middleName, lastName, ...otherInformation] = nameFragments;
// console.log(firstName);