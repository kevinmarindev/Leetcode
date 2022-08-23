//practice the implemantiaon by first mergin two sorted arrays

function mergeSortedArrs(arr1, arr2) {
  let j = 0;
  let i = 0;
  let finalArr = [];

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) finalArr.push(arr2[j]), j++;
    else if (j >= arr2.length) finalArr.push(arr1[i]), i++;
    else if (arr1[i] <= arr2[j]) finalArr.push(arr1[i]), i++;
    else finalArr.push(arr2[j]), j++;
  }

  return finalArr;
}

// console.log(mergeSortedArrs([1,3,5], [1,4,7,9]))

function mergerSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergerSort(arr.slice(0, mid));
  let right = mergerSort(arr.slice(mid));
  return mergeSortedArrs(left, right);
}
