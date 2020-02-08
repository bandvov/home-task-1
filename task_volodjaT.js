import Task from './constructor.js';
import {tasks} from './constructor.js'

tasks.set(
  '88a',
  new Task("You have the natural number n. Find out if n to the power of 2 includes '3'. Please enter 'n'",
    task88_1
  )
);

tasks.set(
  '88b',
  new Task("You have the natural number n. Reverse number n to the power of 2.Please enter 'n'",
    task88_2
  ),
);

tasks.set(
  '322',
  new Task(
    "Find the natural number from 1 to 10 000 with the maximum amount of dividers",
    findDividers,
  )
);

// 88a
function task88_1(n) {
  let strNumber = Math.pow(n, 2).toString();
  if (strNumber.includes(3)) {
    console.log(`YES! ${strNumber} includes 3`)
  } else {
    console.log(`No ${strNumber} does not includes 3`)
  }
}

// 88b
function task88_2(n) {
  let strNumber = Math.pow(n, 2).toString();
  let reverse = strNumber.split("").reverse().join("");
  console.log(reverse);
}

// 322
function findDividers() {
  let maxLenght = 0;
  let number = 0;
  for (let n = 1; n <= 10000; n++) {
    let lengh = findLenght(n);
    if (lengh > maxLenght) {
      maxLenght = lengh;
      number = n;
    }
  }
  console.log(`The number is ${number} and it has ${maxLenght} dividers`);

  function findLenght(n) {
    let dil = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        dil.push(i);
      }
    }
    return dil.length;
  }
}
