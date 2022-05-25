var romanToInt = function(s){
    
    const valuesInIt = {
        "I": 1,
       "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    // let totalsInS = Object.values(valuesInIt)
    // console.log(totalsInS)

    let array2 = s.split('').map(item => valuesInIt[item]);

    // console.log(array2)

    // array2.forEach((item, idx, array) =>{
    //     item < array[idx + 1] ? total++ : ''
    // });

    // for (let i = 0; i < array2.length; i++) {
    //     if(array2[i] >= array2[i + 1]) total += array2[i] 
    //     if(array2[i] < array2[i + 1]) array2[i + 1] = array2[i + 1] - array2[i]
    //     if(i == array2.length - 1) total += array2[array2.length - 1]
    //     console.log(i, array2, total)
    // }

    for (let i = 0; i < array2.length; i++) {
        if(array2[i] < array2[i + 1]) array2[i + 1] = array2[i + 1] - array2[i]
        console.log(i, array2)
    }

    return array2.reduce((prev, curr) => prev + curr, 0)
    // return total
}

console.log(romanToInt("MCMXCIV"))