/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/


const twoSum = (arr, target) => { 
  const targetArray = [];
  const outObj = {};

  for(let i = 0; i<arr.length; i++){
    targetArray.push(target - arr[i]);

    if(!outObj[targetArray[i]]) outObj[targetArray[i]] = 1;
    else outObj[targetArray[i]]++;

    if(!outObj[arr[i]]) outObj[arr[i]] = 1;
    else outObj[arr[i]]++;

    if(outObj[arr[i]] >= 2 || outObj[targetArray[i]] >= 2) return true;

  
  }
  return false;

}


const nums = [2, 5, 11, 15]
console.log(twoSum(nums, 7));
//-> true

const nums2 = [11, 15, 2, 5]
console.log(twoSum(nums2, 7));

console.log(twoSum(nums, 9))// -> false

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 

}





module.exports = { twoSum, threeSum };