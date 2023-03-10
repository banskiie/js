const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7) {
    alert('Alert!');
}

let arrayNum = [5, 2, 3, 5, 1]

for (let el of arrayNum) {
    console.log(el);
}

for (let i = 0; i < arrayNum.length; i++) {
    console.log(arrayNum[i]);
}

for (let i = arrayNum.length - 1; i >= 0; i--) {
    console.log(arrayNum[i]);
}

const anotherRandNum = Math.random();

if ((anotherRandNum > 0.7 && randomNumber > 0.7) || (anotherRandNum < 0.2 || randomNumber < 0.2)) {
    alert('2nd alert!');
}