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


//PROBLEM
//ACTUAL IMPLEMENTATION OF BUBBLE SORT

//BREAK DOWN
//given an unsorted arr return a sorted arry by comparing 2 continious values and decreasing the amount of comparisons by one on each iteration 

//I1: unsorted arr   OUTPUT: sorted array

// function bubbleSort2(arr){
    
//     for (let i = arr.length - 1; i >= 0 ; i--) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr, arr[j], arr[j + 1])
//             let temp = arr[j]
//             if(arr[j] > arr[j + 1]) arr[j] = arr[j + 1], arr[j + 1] = temp 
//         }
//         console.log('completed on whole iteration')
//     }
//     return arr
// }

// console.log(bubbleSort2([1,3,7,8,3,5,46,9]))

// this solution does the same amount of comparisons on every loop so it is not optimized to reduce the amount of comaprisons by one after every inner loop iteration.


//Even more optimized solution 
// reduces the amount of comparasons by one on every loop since we know that every iteration places the biggest num at the end. 
function bubbleSort3(arr){
    
    for (let i = arr.length - 1; i > 0 ; i--) {
        for (let j = 0; j < i - 1; j++) {
            //by checking that j is less than i we make sure not to go up all the way to the nums that have already been sorted
            console.log(arr, arr[j], arr[j + 1])
            let temp = arr[j]
            if(arr[j] > arr[j + 1]) arr[j] = arr[j + 1], arr[j + 1] = temp 
        }
        console.log('completed on whole iteration')
    }
    return arr
}

console.log(bubbleSort3([1,3,7,8,3,5,46,9]))