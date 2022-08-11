// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

//Breakdown
//I1: sorted arr  Output: a number or -1 if not found 
//return the index of the desired item but using binary search where you break down an array in halfs until you find the num 

//SOLUTION 
function binarySearch(arr, target){

//    let start = arr[0]
//    let end = arr[arr.length - 1];
//    let middle = arr[Math.floor((arr.length - 1) / 2)]

    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((end + start) / 2)
    console.log(start, end, middle)

    // if(middle === target) return Math.floor((arr.length - 1) / 2)

//    while(middle > start && middle < end){
//        console.log('run')
//        if(arr[middle] === target) return middle
//        if(arr[start] === target) return start
//        if(arr[end] === target) return end
//        else if(arr[middle] < target) start = middle, middle = Math.floor((end + start) / 2)
//        else end = middle, middle =  Math.floor((end + start) / 2)
//    }

   while(arr[middle] !== target && start <= end){
       console.log('run')
       if(arr[middle] === target) return middle
    //    if(arr[start] === target) return start
    //    if(arr[end] === target) return end
       else if(arr[middle] < target) start = middle + 1;
       else end = middle - 1;
       middle = Math.floor((end + start) / 2)
   }

   return -1
}

console.log(binarySearch([1,2,3,4,5],6))