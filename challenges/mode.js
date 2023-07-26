/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
    //declare empty object to hold numbers
    let numHolder = {};
    let outputNum = 0;
    //iterate through array setting the array values to the keys and the number of each number as the value
    
    if(array.length === 1){
        return array[0];
    }
    for(let i = 0; i<array.length; i++){
        if(!numHolder[array[i]]){
            numHolder[array[i]] = 0;
        }
        numHolder[array[i]] = numHolder[array[i]]+ 1;
    }
    const keys = Object.keys(numHolder);
    const values = Object.values(numHolder);
   
    
    for(let j = 1; j<keys.length; j++){
       
        if(numHolder[keys[j]] === numHolder[outputNum]){
        outputNum = keys[j];
        }
        else if(numHolder[keys[j]] > outputNum){
            outputNum = keys[j];
        }
    
    }
    if(keys.length === 1){
        outputNum = keys[0];
    }
    return outputNum;
};
console.log(mode([3, 2, 4, 3])) //-> 3
console.log(mode([7, 5, 8, 8, 2, 5]))// -> 8
console.log(mode([]))// -> 8
console.log(mode([1,1,1,1]))// -> 8
console.log(-Infinity + 1);

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {
  
};

module.exports = {mode, modeNested};
