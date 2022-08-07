//PRACTICE PROBLEM
//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

    //Instruction
//inputs : one: nums[] | two: num  || Output: a num whihc is the largest sum of two consecutive nums in the arr
//nums msut be consecutive 

function maxSubarraySum(arr, numOfItms){
  //start by returning null if arr lenght is shorter than numOfItems
  if(arr.length < numOfItms) return null
  //initial sum of the desired amount of nums
  let sum = 0
  for (let i = 0; i < numOfItms; i++) {
    sum += arr[i]
  }
  console.log(sum)
  let current = sum

  for (let i = numOfItms; i < arr.length; i++) {
     
   current = current - arr[i - numOfItms] + arr[i]
    // else current = current - arr[i - numOfItms] + arr[i]
    console.log(current)
    if(current > sum) sum = current
  }


 return sum


}
