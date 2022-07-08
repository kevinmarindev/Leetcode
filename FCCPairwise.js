

function pairwise(arr, arg) {
    if(arr.length == 0) return 0
let arr2 = [...arr]
  let idxArr = []
    arr.forEach((itm, idx) => {

        arr2.splice(0,1)
        console.log(arr2, arr, idxArr)
        console.log('item:', itm)
        let supNum = arg - itm
        let i = idx + 1 
        console.log('item:', itm, 'idx:',idx, 'supNum:' , supNum, 'i:',i)
        if(arr2.includes(supNum) && !idxArr.includes(idx)){
            console.log('yes')
            idxArr.push(idx) && idxArr.push((arr2.indexOf(supNum)) + i)
            console.log('getting pushed in:', idx, ((arr2.indexOf(supNum) + i)))
            arr[idxArr[idxArr.length - 1]] = '', arr2[arr2.indexOf(supNum)] = ''
        }
        
    });
    return idxArr.reduce((prev, cur) => prev + cur, 0)
}
console.log(pairwise([1,4,2,3,0,5], 7))
// console.log(pairwise([1,3,2,4], 4))
// console.log(pairwise([1,1,1], 2))
// console.log(pairwise([], 100))
// console.log(pairwise([0,0,0,0,1,1], 1))
//arr = 0,0,0,0,1,1 arr2 = 0,0,0,1,1 , idxArr = []
//0,0,1

//idxarr = [0,4]

//round 2 
//arr = 0,[0],0,0,1,1 arr2 = 0,0,1,1 , idxArr = [0,4]
// 0,1,1