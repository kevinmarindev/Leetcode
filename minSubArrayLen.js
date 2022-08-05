//PRACTICE PROBLEM
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//Break down
//given an arr and a number. return a number
//return the smallest amount of arr itmes that add up to or more than the given num.

//SOLUTION
function minSubArrayLen(arr, num) {
  let i = 0;
  let j = 0;
  let count = 0;
  let window = Infinity;

  while (i < arr.length) {
    if (count < num && j < arr.length) {
      count += arr[j];
      j++;
    } else if (count >= num) {
      window = Math.min(j - i, window);
      count -= arr[i];
      i++;
    } else break;
  }

  return window === Infinity ? 0 : window;
}
