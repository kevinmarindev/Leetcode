// Runtime: 0 ms
// Memory Usage: 61.7 MB
// 07/07/25
var reverseString = function (s) {
  //use two pointer approach
  let i = 0;
  let j = s.length - 1;
  let temp;
  while (i < j && i !== j) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));

// Runtime: 0 ms
// Memory Usage: 60 MB
// var reverseString = function (s) {
//   let i = 0,
//     j = s.length - 1;
//   let temp;
//   while (i !== j && i < j) {
//     temp = s[i];
//     s[i] = s[j];
//     s[j] = temp;
//     i++;
//     j--;
//   }
//   return s;
// };
