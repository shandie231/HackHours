/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:


maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/

const maxDepth = arr => {
    let maxDepths = 1;
    let currentDepth = 1;

    arr.forEach((el) => {
        if(Array.isArray(el)) {
            currentDepth += 1;
            maxDepths = maxDepth(el);
        }
        //if(currentDepth > maxDepth)

});
    currentDepth = 1;
    return maxDepths;

  
};

console.log(maxDepth([[2, 1], 8, 3, [4], 5]))
// -> 2 (maximum depth is 2 levels)



console.log(maxDepth([3, [6, [7]], 2]))
// -> 3 (maximum depth is 3 levels)



console.log(maxDepth([3, 2]))
// -> 1 (non-nested array, so maximum depth is 1 level)
console.log(maxDepth([7, 8, 0, 9]))
// -> 1 (non-nested array, so maximum depth is 1 level)
console.log(maxDepth([]))
// -> 1 (array may be empty)

console.log(maxDepth([3, [6, 7], 2]))
// -> 2 (maximum depth is 2 levels)

console.log(maxDepth([3, [], 2]))
// -> 2 (inner arrays may be empty, but still count towards depth)



console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]))
// -> 4 (maximum depth is 4 levels)


module.exports = {maxDepth};
