// 88в
function swapMarginalDigits(num) {
  let numToStr = num.toString();
  let result = numToStr.slice(-1) + numToStr.slice(1, -1) + numToStr.slice(0, 1);
  console.log(parseInt(result))
}
// swapMarginalDigits(12345);

// 88г
function wrapByOne(num) {
  let result = '1'.concat(num, '1');
  console.log(parseInt(result))
}
// wrapByOne(555);


// 332
function findLagrangeNumbers(num) {
  let sqrtOfnum = Math.floor(Math.sqrt(num));
  for (let x = 1; x <= sqrtOfnum; x++) {
    for (let y = 1; y <= sqrtOfnum; y++) {
      for (let z = 1; z <= sqrtOfnum; z++) {
        for (let t = 1; t <= sqrtOfnum; t++) {
          if ((x * x + y * y + z * z + t * t) === num) {
            console.log(`x= ${x}, y= ${y}, z= ${z}, t= ${t}`);
            return;
          }
        }
      }
    }
  }
}
// findLagrangeNumbers(50);



class Task {
  constructor(description, func) {
    this.description = description;
    this.func = func;
  }

  run() {
    console.log(this.description);
    this.func();
  }
}

const tasks = new Map();
tasks.set('88v', new Task("Swap the first and last digits of number n", () => swapMarginalDigits(12345)));
tasks.set('88h', new Task("Add one at the beginning and the end of the number n", () => wrapByOne(555)));
tasks.set('332', new Task("It is known that any natural number can be represented as a sum of not more than four " +
  "squares of natural numbers or, which is the same as the sum of four squares of non-negative integers (Langrange's " +
  "theorem). Given a natural number n. Find the non-negative: x, y, z, t, where n = x*x + y*y +z*z + t*t",
  () => findLagrangeNumbers(50)));

let number = prompt('Enter task number:');
task = tasks.get(number);

if(task) {
  task.run();
} else {
  console.log("Task not found")
}
