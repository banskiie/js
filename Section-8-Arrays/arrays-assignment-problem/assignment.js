const numArr = [1, 3, 5, 7, 9, 11];

// const filArr = numArr.filter((val, idx, arr) => {
//     return val > 6;
// });
const filArr = numArr.filter(val => val > 6);
console.log(filArr);

// const mapArr = numArr.map((val, idx, arr) => {
//     const newObj = { num: val };
//     return newObj;
// });
const mapArr = numArr.map(val => ({ num: val }));
console.log(mapArr);

// const redVal = numArr.reduce((prev, cur, idx, arr) => { return prev *= cur }, 1);
const redVal = numArr.reduce((prev, cur) => prev * cur, 1);
console.log(redVal);

const findMax = (...arr) => {
  return Math.max(...arr);
}
console.log(findMax(...numArr));

const findMinMax = (...arr) => {
  return [Math.min(...arr), Math.max(...arr)];
}

const [minValue, maxValue] = findMinMax(...numArr);
console.log(minValue, maxValue);

const slicedArr = numArr.slice(1, 4);
console.log(slicedArr);

const splicedArr = numArr.splice(6, 0, 13, 15, 17);
console.log(numArr);

console.log(numArr.includes(14));
console.log(numArr.find(val => val === 5));
console.log(numArr.findIndex(val => val === 5));
console.log(numArr.reverse())
console.log(numArr.join(", "))

const numSet = new Set();
numSet.add(1);
console.log(numSet);

const numMap = new Map();

for (const num of numArr) {
  numMap.set(`Value #${num}`, num);
}
console.log(numMap);