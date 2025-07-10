// common stack problem

var isValid3 = function (s) {
  const collector = [];
  for (char of s) {
    if (char === "(" || char === "{" || char === "[") {
      collector.push(char);
    } else {
      if (char === ")" && collector[collector.length - 1] !== "(") return false;
      if (char === "}" && collector[collector.length - 1] !== "{") return false;
      if (char === "]" && collector[collector.length - 1] !== "[") return false;
      collector.pop();
    }
  }
  return collector.length === 0;
};

// var isValid2 = function(s) {
//     let arr = s.split('')
//     console.log(arr)
//     if(arr.length % 2 == 1) return false
//     let brackets = s.match(/\[|\]/gi)
//     console.log(brackets)
//     if(brackets?.length % 2 == 1) return false
//     let curly = s.match(/\{|\}/gi)
//     console.log(curly)
//     if(curly?.length % 2 == 1) return false
//     let parent = s.match(/\(|\)/gi)
//     if(parent?.length % 2 == 1) return false
//     else return true
// };

var isValid = function (s) {
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  if (s.length % 2 == 1) return false;

  for (const char of s) {
    if ("({[".includes(char)) stack.push(char);
    else if (pairs[char] !== stack.pop()) return false;
  }

  return stack.length == 0;
};
console.log(isValid("({)}"));
