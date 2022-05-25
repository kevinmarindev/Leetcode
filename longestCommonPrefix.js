var longestCommonPrefix = function(strs) {
    const keyStr = strs[0];
    let returnStr = "";
    if(strs[0] == '') return ''
    for (let i = 0; i < keyStr.length; i++) {
        if(strs.length == strs.filter(word => word[i] == keyStr[i]).length) returnStr += keyStr[i]
       else break
    }
    return returnStr
};

console.log(longestCommonPrefix(['flower', 'flower', 'flower']))


