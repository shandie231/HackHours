/*

Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.


ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const { parseArgs } = require("util");

const commonElements = (...args) => {

    const dupVals = [];
    const obj = {};
    const outputArray = [];
    const newArray = [...args];
    
    // console.log(newArray);
    // const map1 = newArray.map((x) => outputArray.push(x));
    // console.log(map1);
    
    
    console.log(newArray);
    for(let i =0; i<newArray.length; i++){
        let currArr = newArray[i];
        console.log(currArr);
        for(let j = 0; j<currArr.length; j++){
            outputArray.push(currArr[j]);
            if(!obj[currArr[j]]){
                obj[currArr[j]] = 1; 
            }else{
                dupVals.push(currArr[j]);
            }
        }
        
    }
    console.log(dupVals);


}


arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];
console.log(commonElements(arr1, arr2, arr3));



/*
** Extension **
Refactor your function to have O(n) time complexity.
*/

const commonElementsOptimized = (...args) => {

}

module.exports = {commonElements, commonElementsOptimized} 