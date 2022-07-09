console.log([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92].sort((a,b)=> a-b))

function bubbleSort(array) {
    let arr2 = [...array]

    let final = []
    // console.log(arr2)
    // let loops = 0
    // for (let index = 0; index < loops; index++) {
    //     const element = array[index];
        
    // }
    // do{
    //     array.forEach((itm,i) => {
    //     if(array[i] > array[i + 1]) array[i] = array[i + 1], array[i + 1] = itm
    //     if(array[i] < array[i - 1]) loops = loops++
    //     else loops = false
    // });
    // }
    // while(loops)
   

    // for (let index = 0; index < loops; index++) {
    //      array.forEach((itm,i) => {
    //     if(array[i] > array[i + 1]) array[i] = array[i + 1], array[i + 1] = itm
    // });
    // }
    for (let index = 0; index < array.length; index++) {
        let min = Math.min(...arr2)
        final.push(min)
        arr2.splice((arr2.indexOf(min)), 1)
        
    }

    // console.log(loops)
    return final
  // Only change code below this line
  
  // Only change code above this line
}
console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
// console.log(bubbleSort([1,4,2,8,345,123,43]))


// [1,2,4,8,123,43,345]

// [1,4,2,8,345,123,43]
//current = 1 i = 0 loop = 0
    //set array[i] = array[i + 1], array[i + 1] = current 
// [1,4,2,8,345,123,43]
//current = 4 i = 1 loop = 0
    //set array[i] = array[i + 1], array[i + 1] = current 
    //if(array[i] < array[i -1] loop++)
// [1,2,4,8,345,123,43]
//current = 4 i = 2 loop = 0
    //set array[i] = array[i + 1], array[i + 1] = current 
// [1,2,4,8,345,123,43]
//current = 8 i = 3
    //set array[i] = array[i + 1], array[i + 1] = current 
// [1,2,4,8,345,123,43]
//current = 345 i = 4
    //set array[i] = array[i + 1], array[i + 1] = current 
// [1,2,4,8,123,345,43]
//current = 345 i = 5
    //set array[i] = array[i + 1], array[i + 1] = current 