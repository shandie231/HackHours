/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function(arr, k) {
  let m = new Map();
  arr.forEach(num => m.set(num, m.get(num)+1 || 1));
  let occurances = Array.from(m.values());
  occurances.sort((a,b) => a-b);
  let res = occurances.length;
  for (let num of occurances) {
    if (k >= num) {
      k -= num;
      res--;
    }
    else return res;
  }
  return res;


};

console.log(findLeastNumOfUniqueInts([5,5,4], 1))