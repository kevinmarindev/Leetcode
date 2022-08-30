//1st implement pivot function 
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array 
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index




function pivot(arr, start = 0, end = arr.length - 1){
    let pivot = arr[0];
    let swapIndex = 0;
    let current = 1
            5//current < 6 
    while(current < arr.length){
        if(pivot >= arr[current]){
            swapIndex++;
            //swapi 3
            [arr[swapIndex], arr[current]] = [arr[swapIndex], arr[current]];
        }
        current++
    }

    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]

    return swapIndex
}


console.log(pivot([5,2,12,34,2,5]))

//pivot: 5
//

//5,2,2,34,12,5
//5,2,2,5,32,12