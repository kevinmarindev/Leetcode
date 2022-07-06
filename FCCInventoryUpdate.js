function updateInventory(arr1, arr2) {
    let arr3 = arr1.flat().filter((itm, idx) => idx % 2 == 0)
    let arr4 = arr1.flat().filter((itm, idx) => idx % 2 == 1)
    let arr5 = arr2.flat().filter((itm, idx) => idx % 2 == 0)
    let arr6 = arr2.flat().filter((itm, idx) => idx % 2 == 1)

    console.log(arr3)
    console.log(arr4)
    console.log(arr5)
    console.log(arr6)

    arr6.forEach((element, idx) => {
        // if(!arr4.includes(element)) arr4.push(element), arr3.push(arr5[idx])
        // else arr3[arr4.indexOf(element)] += arr5[idx]
        console.log(element)
        if(!arr4.includes(element)) arr4.push(element), arr3.push(arr5[idx])
        else arr3[arr4.indexOf(element)] += arr5[idx]
    });

    console.log(arr3, arr4)

    let finalarr = arr3.map((itm, idx) => [arr4[idx], itm]).sort().map(arr => arr.reverse())

  

    return finalarr
}


console.log(
  updateInventory(
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ],
    [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ]
  )
);