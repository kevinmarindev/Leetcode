//PRACTICE PROBLEM
//INSTRUCTIONS: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//UNDERSTAND
//INPUT SORTED ARR | OUTPUT BOOLEAN | EMPTY ARR = FALSE | target average : param 2
//Given a sorted arr find two numbers that when added and together then divided by 2 result in the target average passed in a paramter

//SOLUTON i will be using the opposite ends pointer method
function averagePair(arr, avg) {
  // test for empty arrs
  if (arr.length < 2) return false;

  //set the 1st pointer on opposite ends
  let j = arr.length - 1;
  let i = 0;

  //create a loop to see test out the two extremes substract from the left if the current avg is less than the avg, do the opposite if the currentAvg is bigger than the avg

  while (i < j) {
    let currentAvg = (arr[i] + arr[j]) / 2;
    if (currentAvg < avg) i++;
    else if (currentAvg > avg) j--;
    // else if(currentAvg === avg)return true
    else return true;
  }
  return false;
}
