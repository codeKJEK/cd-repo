// ARRAY METHODS
// Push
let pushArray = [1, 2, 3];
pushArray.push(4);
// Pop
let popArray = [1, 2, 3];
popArray.pop();
// Shift
let shiftArray = [1, 2, 3];
shiftArray.shift();
// Unshift
let unshiftArray = [1, 2, 3];
unshiftArray.unshift(0);
// Concat
let concatArray = [1, 2, 3];
let concatArray2 = [4, 5, 6];
let concatArray3 = concatArray.concat(concatArray2);
// Includes
let includesArray = [1, 2, 3];
includesArray.includes(1);
// Index Of
let indexOfArray = [1, 2, 3];
indexOfArray.indexOf(1);
// Join
let joinArray = [1, 2, 3];
joinArray.join();
// Reverse
let reverseArray = [1, 2, 3];
reverseArray.reverse();
// Slice
let sliceArray = [1, 2, 3];
sliceArray.slice(0, 1);
// Splice
let spliceArray = [1, 2, 3];
spliceArray.splice(0, 1);
// Sort
let sortArray = [3, 2, 1];
sortArray.sort();
// Map
let mapArray = [1, 2, 3];
mapArray.map((item) => {
  return item;
});
// Filter
let filterArray = [1, 2, 3];
filterArray.filter((item) => {
  return item;
});
// Reduce
let reduceArray = [1, 2, 3];
reduceArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// For Each
let forEachArray = [1, 2, 3];
forEachArray.forEach((item) => {
  console.log(item);
});
