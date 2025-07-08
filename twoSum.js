// 07/07/2025 12m
// Runtime
// 0
// ms
// Beats
// 100.00%
// Analyze Complexity
// Memory
// 56.22
// MB
// Beats
// 15.72%
var twoSum = function (nums, target) {
  const collector = {};
  // nums.forEach((item, idx) => {
  //   collector[item] = idx;
  // });
  let idx = 0;
  for (const item of nums) {
    console.log(item);
    const complement = collector[target - item];
    console.log("complement", complement);
    if (complement !== undefined) return [complement, idx];
    collector[item] = idx;
    idx++;
  }
  console.log("collector", collector);
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let one = target - nums[i]
//         console.log(one)
//         let two = nums[i]
//         console.log(nums[i])
//          arr = nums.filter(item => item == one || item == two);
//         console.log(nums, arr)
//         if(arr.length == 2 && arr[0] == arr[1]){
//             console.log(nums)
//             let arrOne = []
//             arrOne.push(nums.indexOf(arr[0]), nums.lastIndexOf(arr[1]))
//             return arrOne
//         }
//         else if(arr.length == 2){
//             let arrOne = []
//             arrOne.push(nums.indexOf(arr[0]), nums.indexOf(arr[1]))
//             return arrOne
//         }
//     }

// };
// console.log(twoSum([2,7,11,15], 9))

// function sym(...args) {
//   console.log(args, args.length);
//   let chops = [...args];
//   console.log(chops);
//   let current = [];
//   //   console.log(current)
//   //   console.log(chops[0].includes(1))

//   for (let i = 1; i < args.length; i++) {
//     console.log(chops, "here");
//     current = [];
//     for (let i = 0; i < 10; i++) {
//       if (
//         (chops[0].includes(i) && !chops[1].includes(i)) ||
//         (!chops[0].includes(i) && chops[1].includes(i))
//       )
//         current.push(i);
//     }
//     if (chops.length > 2) {
//       chops.splice(0, 2);
//       chops.unshift(current);
//     }
//   }
//   return current;
// }

// console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
