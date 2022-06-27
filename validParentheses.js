var isValid = function(s) {
    let arr = s.split('')
    console.log(arr)
    if(arr.length % 2 == 1) return false
    let brackets = s.match(/\[|\]/gi)
    console.log(brackets)
    if(brackets?.length % 2 == 1) return false 
    let curly = s.match(/\{|\}/gi)
    console.log(curly)
    if(curly?.length % 2 == 1) return false
    let parent = s.match(/\(|\)/gi)
    if(parent?.length % 2 == 1) return false 
    else return true
};
console.log(isValid('()[]{}'))