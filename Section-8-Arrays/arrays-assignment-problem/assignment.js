const numArr = [2, 4, 6, 8, 10];
const filterArr = numArr.filter(val => val > 6);
console.log(filterArr);
const mapArr = numArr.map(val => ({ num: val }));
console.log(mapArr);
const reducedVal = numArr.reduce((prev, cur) => prev * cur, 1);
console.log(reducedVal);

const findMax = (...numbers) => Math.max(...numbers);

const findMinMax = (...numbers) => [Math.min(...numbers), Math.max(...numbers)];
const [minVal, maxVal] = findMinMax(...numArr);

console.log(findMax(...numArr));
console.log(minVal, maxVal);

const fullName = new Set();
fullName.add('Shand');
fullName.add('Ivan');
fullName.add('Ivan')
console.log(fullName);

