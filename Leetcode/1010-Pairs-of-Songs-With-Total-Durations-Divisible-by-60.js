/*

1010. Pairs of Songs With Total Durations Divisible by 60
You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

 

Example 1:

Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
Example 2:

Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.

*/

/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function(time) {
  let pairs = 0;
  //create array of 60 and fill with all 0's
  let arr = new Array(60).fill(0);

  for( let i of time){
    let k = i % 60;
    if( k === 0){
      pairs += arr[k];
    }else{
      pairs += arr[60-k]
    }
    arr[k]++;
  }
  console.log(arr);

return pairs;

};



console.log(numPairsDivisibleBy60([30,20,150,100,40]));
console.log(numPairsDivisibleBy60([60, 60, 60]));