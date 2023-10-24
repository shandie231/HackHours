//Given an integer array nums, find the subarray 
//with the largest sum, and return its sum.
/*
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
*/
//check if value at index is negative, if it is, recursively call checking the next element - if its greater than
//the absolute of the previous negative extend the array, if not set new start at the current index
//if negative continue to check recursively and keep track of the negatives


const maxSubarrayLeet = (arr) => {
  let start = 0;
  let pointer = start;
  let end = start;
  let total = 0;
  let maxTotal = 0;
  let outputArr = [];
  for(let i = start; i < arr.length + 1; i++){
    //check the start value and make sure it is not a negative. - If it is a negative, look at the next value, if the next value is greater than the current index set start to the next value
    if(Math.sign(arr[start]) === -1){
      //check if the next index is greater than the current
      if(arr[i] < arr[i+1]){
        //set start to the next index
        start = i + 1;
        pointer = start + 1;
        total += arr[start];
        //set single index to output array
        outputArr = arr.slice(start, pointer);
      }
    }else{
      //conditional to check for
      //* If the next index is negetive 
      //*   AND if the next index is less than the current
      //* OR if at the last index in the array
      if(((Math.sign(arr[pointer]) === -1) && (Math.abs(arr[pointer]) > arr[pointer - 1])) || arr[pointer] === undefined){
        //this conditional will set the output array, and reset the pointers and total
        end = i;
        //check if the current total is greater than the cached total
        if(total > maxTotal){
          maxTotal = total;
          outputArr = arr.slice(start, end);
        }
        start = pointer + 1;
        i = start;
        total = arr[start];
        pointer = start + 1;
      }else{ 
        //if that complex conditional fails, add the next index to the total and increment the pointer 
        total += arr[pointer];
        pointer++;
      }
    }
  }
  return outputArr;
}


const array1 = [-2,1,-3,4,-1,2,1,-5,4];
const array2 = [1];
const array3 = [5,4,-1,7,8];
const array4 = [-5, -2, -6, -1, -6]
console.log(maxSubarrayLeet(array1));
console.log(maxSubarrayLeet(array2));
console.log(maxSubarrayLeet(array3));
console.log(maxSubarrayLeet(array4));