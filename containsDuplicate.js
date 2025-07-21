// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

//! 07/15/25 | time: 5:03 | RT: 34ms O(n) | Mem : 77.5 MB O(n)
var containsDuplicate = function (nums) {
  const collector = {};

  for (const num of nums) {
    collector[num] ? collector[num]++ : (collector[num] = 1);
    if (collector[num] > 1) return true;
  }
  return false;
};

//! 07/10/25
var containsDuplicate = function (nums) {
  if (nums.length == 1) return false;
  const collector = {};

  for (const num of nums) {
    collector[num] ? collector[num]++ : (collector[num] = 1);
    if (collector[num] > 1) return true;
  }
  return false;
};
