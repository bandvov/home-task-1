// 88в
function swapMarginalDigits(num) {
  let numToStr = num.toString();
  let result = numToStr.slice(-1) + numToStr.slice(1, -1) + numToStr.slice(0, 1);
  console.log(parseInt(result))
}
swapMarginalDigits(12345);

// 88г
function wrapByOne(num) {
  let result = '1'.concat(num, '1');
  console.log(parseInt(result))
}
wrapByOne(555);

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
findLagrangeNumbers(50);