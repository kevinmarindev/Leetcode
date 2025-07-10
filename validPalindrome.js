//07/10/25
// Runtime
// 3
// ms
// Beats
// 86.07%
// Analyze Complexity
// Memory
// 56.00
// MB
// Beats
// 87.73%
// two pointers

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "");
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};
