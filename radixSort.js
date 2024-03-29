//you will need helper methods

// first methos is needed to obtain the desired digit within a number 

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//second helper method
//returns the number of digits in a num
function digitCount(num){
    return String(num).length
}


//third method returns the number of digits the biggest number in the arr has

function mostDigits(arr){
    return String(Math.max(...arr)).length
}

function radixSort(arr){
    // let arr0 = [];
    // let arr1 = [];
    // let arr2 = [];
    // let arr3 = [];
    // let arr4 = [];
    // let arr5 = [];
    // let arr6 = [];
    // let arr7 = [];
    // let arr8 = [];

    
    let outerLoop = mostDigits(arr)
    
    console.log('longest num:',outerLoop)
     let j = 0
    while (j < outerLoop){
        let boxes = [...Array(10)].map(item => item = [])
        for (let i = 0; i < arr.length; i++) {
            let number = arr[i]
            let digitCounts = digitCount(number)
            console.log('current number', number)
            // if(digitCounts > j){

                let digit =  getDigit(number, j)
                console.log('the digit is', digit)
                // console.log(String(number).length)
                boxes[digit].push(number)
                console.log(boxes)
            // }

            
        }
         arr = [].concat(...boxes)
         console.log(arr)
         j++

    }
    return arr

   

}


// let arrr = Array([])

// arrr[1].push('car')
// console.log(arrr)

console.log(radixSort([12,345,2,4,3456,0]))



//course solution
// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// }

// function radixSort(nums){
//     let maxDigitCount = mostDigits(nums);
//     for(let k = 0; k < maxDigitCount; k++){
//         let digitBuckets = Array.from({length: 10}, () => []);
//         for(let i = 0; i < nums.length; i++){
//             let digit = getDigit(nums[i],k);
//             digitBuckets[digit].push(nums[i]);
//         }
//         nums = [].concat(...digitBuckets);
//     }
//     return nums;
// }

// radixSort([23,345,5467,12,2345,9852])