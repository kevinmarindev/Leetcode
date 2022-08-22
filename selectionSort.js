//given an array sort it from smallest to biggest using selection sort.

function selecitonSort(arr){
    //create the variable that stores the smallest num on every iteration and another variable for the index of this item 
    
    let i = 0
    let j = 1
    let index = 0
    let arr2 = [...arr]
    let min = arr2[0]
    console.log(arr2, min)
    //compare the current item to every item in the array and every time you find a smaller number store the value of the index. after a complete loop swap the smallest with the item placed at the index you found on the iteration. Increase loop by one and compare until the end of the arr.
    
    while(i < arr2.length){
        console.log(arr2.length, index, i)
        if(j >= arr2.length && index > i){
            console.log('swapping', arr2)
            arr2[index] = arr2[i];
            arr2[i] = min;
            i++;
            j = i + 1;
            min = arr2[i];
            index = i;
            console.log(arr2)
        }
        else if(min >= arr2[j]){
            console.log(min, arr2)
            min = arr2[j];
            index = j;
            j++;

            console.log(min, index, j, arr2)
        }
        else if(min < arr2[j]){
            console.log('continue', arr2)
            j++
            console.log(arr2)
        }
        else{
            console.log('probably ending')
            i++;
            j = i + 1;
            min = arr2[i]
            console.log(arr2)
        }
    }

    return arr2
}

console.log(selecitonSort([2,1,4,3,5,67,9,34,1,45,0]))