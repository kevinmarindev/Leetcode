
//Use insertion sort to solve this problem basically check if the item after the current sorted items is smaller than the last if it is determine where in the sorted items should this item be placed. SOrted is all the items that have been placed inititally the firts item is considered sorted.

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        let current = arr[i]; 
        for(var j = i - 1; j >= 0 && arr[j] > current; j--) {
            console.log(arr, current)
            arr[j + 1] = arr[j]
            arr[j] = current
                        console.log(arr)

         }
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4,5,7,7,8,0]))
