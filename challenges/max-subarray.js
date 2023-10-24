/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

const maxSubarray = (nums) => {
  if(!Array.isArray(nums)) return undefined;
  let start = 0;
  let pointer = start;
  let end = start;
  let total = 0;
  let maxTotal = nums[start];
  let outputArr = nums.slice(start, start + 1);
  for(let i = start; i < nums.length + 1; i++){
    //check the start value and make sure it is not a negative. - If it is a negative, look at the next value, if the next value is greater than the current index set start to the next value
    if(Math.sign(nums[start]) === -1){
      //check if the next index is greater than the current
      if(nums[i] < nums[i+1]){
        //set start to the next index
        start = i + 1;
        pointer = start + 1;
        total = nums[start];
        maxTotal = total;
        
        //set single index to output array
        outputArr = nums.slice(start, pointer);
      }
    }else{
      //conditional to check for
      //* If the next index is negetive 
      //*   AND if the next index is less than the current
      //* OR if at the last index in the array
      if(((Math.sign(nums[pointer]) === -1) && (Math.abs(nums[pointer]) > nums[pointer - 1])) || nums[pointer] === undefined){
        //this conditional will set the output array, and reset the pointers and total
        end = i;
        //check if the current total is greater than the cached total
        if(total > maxTotal){
          maxTotal = total;
          outputArr = nums.slice(start, end);
        }
        start = pointer + 1;
        i = start;
        total = nums[start];
        pointer = start + 1;
      }else{ 
        //if that complex conditional fails, add the next index to the total and increment the pointer 
        total += nums[pointer];
        pointer++;
      }
    }
  }
  return maxTotal;
}

const array1 = [-2,1,-3,4,-1,2,1,-5,4];
const array2 = [1];
const array3 = [5,4,-1,7,8];
const array4 = [-100, -20, -5, -10];
const array5 = [1,2,-1,-2,2,1,-2,1,4,-5,4];
const array6 = [1, -2, 3, 10, -4, 7, 2, -5]

console.log(maxSubarray(array1));
console.log(maxSubarray(array2));
console.log(maxSubarray(array3));
console.log(maxSubarray(array4));
console.log(maxSubarray(array5));
console.log(maxSubarray(array6));


/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

const kadanesMaxSubarray = (nums) => {
  if(!Array.isArray(nums)) return undefined;
  let start = 0;
  let pointer = start;
  let end = start;
  let total = 0;
  let maxTotal = nums[start];
  let outputArr = nums.slice(start, start + 1);
  for(let i = start; i < nums.length + 1; i++){
    //check the start value and make sure it is not a negative. - If it is a negative, look at the next value, if the next value is greater than the current index set start to the next value
    if(Math.sign(nums[start]) === -1){
      //check if the next index is greater than the current
      if(nums[i] < nums[i+1]){
        //set start to the next index
        start = i + 1;
        pointer = start + 1;
        total = nums[start];
        maxTotal = total;
        
        //set single index to output array
        outputArr = nums.slice(start, pointer);
      }
    }else{
      //conditional to check for
      //* If the next index is negetive 
      //*   AND if the next index is less than the current
      //* OR if at the last index in the array
      if(((Math.sign(nums[pointer]) === -1) && (Math.abs(nums[pointer]) > nums[pointer - 1])) || nums[pointer] === undefined){
        //this conditional will set the output array, and reset the pointers and total
        end = i;
        //check if the current total is greater than the cached total
        if(total > maxTotal){
          maxTotal = total;
          outputArr = nums.slice(start, end);
        }
        start = pointer + 1;
        i = start;
        total = nums[start];
        pointer = start + 1;
      }else{ 
        //if that complex conditional fails, add the next index to the total and increment the pointer 
        total += nums[pointer];
        pointer++;
      }
    }
  }
  return maxTotal;
}



module.exports = { maxSubarray, kadanesMaxSubarray };
