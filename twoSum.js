var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let one = target - nums[i]
        console.log(one)
        let two = nums[i]
        console.log(nums[i])
         arr = nums.filter(item => item == one || item == two);
        console.log(nums, arr)
        if(arr.length == 2 && arr[0] == arr[1]){
            console.log(nums)
            let arrOne = []
            arrOne.push(nums.indexOf(arr[0]), nums.lastIndexOf(arr[1]))
            return arrOne  
        }
        else if(arr.length == 2){
            let arrOne = []
            arrOne.push(nums.indexOf(arr[0]), nums.indexOf(arr[1]))
            return arrOne
        }
    }
    
};
console.log(twoSum([2,7,11,15], 9))