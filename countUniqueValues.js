//INSTRUCTIONS
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//STEP ONE UNDERSTAMD THE PROBLEM
//you will be given one sorted array
//you should return a number wich is equal to the number of unique values the arr contains
//empty array should return 0

//SOLUTION
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  //create two pointers one at idx 0 (i) and one at idx 1 (j)
  let i = 0;
  j = 1;
  //start by compraing I to J and if they are different move I one slot and set it equal to J
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }

  return i + 1;
  //Keep moving J until the end of the arr the return the idx of I plus 1
}
