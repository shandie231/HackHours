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
  const cache = {};
  for(let i = 0; i < arr.length; i++){
    if(!cache[Math.abs(arr[i] - target)]){
      cache[Math.abs(arr[i] - target)] = arr[i];
      console.log(cache);
    }
    if(cache[arr[i]]){
      return true;
    }

  }
  return false;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([2,7,11,15], 10));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 1));




/*
const twoSum = (arr, target) => { 
  if(arr.length === 0) return underfined;
  const cache = new Map();

  for(let i = 0; i < arr.length; i++){
    if(cache.has(arr[i])) return [cache.get(arr[i]), i];
    cache.set(target - arr[i], i);
  }
  return false;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));


const nums = [2, 5, 11, 15]
console.log(twoSum(nums, 7));
//-> true

const nums2 = [11, 15, 2, 5]
console.log(twoSum(nums2, 7));

console.log(twoSum(nums, 9))// -> false
*/
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

Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => { 

  const cache = new Map();

  for(let i = 0; i < arr.length; i++){
 
    for(let j = 1; j < arr.length; j++){
      if(cache.has(arr[i])){
        let cacheVal = cache.get(arr[i]);
        if(!cacheVal.includes(arr[i])) return true;
      }
      cache.set(target - (arr[i] + arr[j]), [arr[i], arr[j]]);
      console.log(cache);
    }
  }
  return false;
}
let newArr = [2, 5, 11, 15];
let newArr2 = [1, 4, 7, 2, 9, 0];
let newTarget  = 18;
let newTarget2  = 45;
//console.log(threeSum(newArr, newTarget));
console.log(threeSum([1, 4, 7, 2, 9, 0], 19));
//console.log(threeSum([1, 4, 6, 12, 9], 45));





module.exports = { twoSum, threeSum };