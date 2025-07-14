var addBinary = function (a, b) {
  let finalStr = "";
  let arrA = a
    .split("")
    .reverse()
    .reduce((acc, current, idx) => {
      if (current === "1") {
        console.log("valid", idx);
        console.log("value of exponent", 2 ** idx);
        return acc + 2 ** idx;
      }
      return acc;
    }, 0);
  console.log("Value of A", arrA);
  let arrB = b
    .split("")
    .reverse()
    .reduce((acc, current, idx) => {
      if (current === "1") {
        console.log("valid");
        console.log("value of exponent", 2 ** idx);
        return acc + 2 ** idx;
      }
      return acc;
    }, 0);
  console.log("value of b", arrB);
  let total = arrB + arrA;
  if (total === 0) return "0";
  let power = 0;
  let start = false;
  while (power >= 0) {
    console.log("VALLL", 2 ** power, "and", total, "power", power);
    // if(start){
    if (total >= 2 ** power) {
      finalStr = finalStr + "1";
      total -= 2 ** power;
      start = true;
    } else {
      if (start) {
        finalStr = finalStr + "0";
      }
    }
    // }

    power--;
  }
  console.log("final Str", finalStr);
  return finalStr;
  // let arraB = a.split("").reverse()
  // let idx
  // while(true){
  //     if(arr)
  // }
};
