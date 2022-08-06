//PRACTICE PROBLEM
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

//BREAK DOWN
// INPUT: a string | Output: a number | return the longest amount of non same chars inside of a str

//SOLUTION
function findLongestSubstring(str, num) {
  if (str.length === 0) return 0;
  let longest = -Infinity;
  let i = 0;
  let j = 0;
  let currentCount = 0;
  let obj = new Set();

  while (i < str.length) {
    let char = str[j];
    console.log(char, i, j);
    // if(obj[char] === undefined) break
    if (j >= str.length) {
      console.log("in he");
      longest = Math.max(longest, currentCount);
      console.log(obj);
      obj.clear();
      console.log("deleted", obj);
      currentCount = 0;
      console.log(obj);
      i++;
      j = i;
    } else if (obj.has(str[j]) === false) {
      obj.add(str[j]);
      currentCount++;
      j++;
      console.log(obj);
    } else if (obj.has(str[j])) {
      longest = Math.max(longest, currentCount);
      console.log(obj);
      obj.clear();
      console.log("deleted", obj);
      currentCount = 0;
      console.log(obj);
      i++;
      j = i;
    } else break;
  }

  return longest;
}
