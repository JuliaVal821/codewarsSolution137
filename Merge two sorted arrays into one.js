https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2);
    return arr.filter((elm, i) => i === arr.indexOf(elm)).sort((a, b) => a -b);
}