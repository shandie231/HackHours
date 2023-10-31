/* 
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval 
and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

function insertInterval(intervals, newInterval){
  if(intervals.length === 0) return [newInterval]; 
  if(newInterval.length === 0) return intervals;

  for(let i = 0; i<intervals.length; i++){
    if(intervals[i][1] >= newInterval[0]){
      //for single index input interval
      if(intervals[i+1] === undefined){
        if(newInterval[1] > intervals[i][1]){
          if(newInterval[0] < intervals[i][0]){
            intervals[i] = newInterval;
          }else{
            intervals[i] = [intervals[i][0], newInterval[1]]
          }
        }
        if(newInterval[0] < intervals[i][0] && intervals[i-1] === undefined){
          if(newInterval[1] < intervals[i][0]){
            intervals.unshift(newInterval);
          }else{
            intervals[i] = [newInterval[0], intervals[i][1]]
          }
        }
        return intervals;
      }
      if(newInterval[1] < intervals[i][1] && newInterval[0] < intervals[i][0]){
        intervals.unshift(newInterval);
        return intervals;
      }

      if(intervals[i+1][0] > newInterval[1] && intervals[i][1] < newInterval[1]){
        console.log(i);
        console.log(intervals);
        intervals[i] = [intervals[i][0], newInterval[1]]
        console.log(intervals)
        return intervals;
      }else if(intervals[i+1][0] <= newInterval[1]){
        intervals[i] = [intervals[i][0], intervals[i+1][1]]
        let cutIntervals = intervals.splice(i+1, 1);
        if(intervals[i][1] > newInterval[1]){
          return intervals;
        }
        i--;
      }
    }
    if(intervals[i+1] === undefined){
      if(newInterval[0] > intervals[i][1]){
        intervals.push(newInterval);
      }
    }
  }
  return intervals;
}

const array1 = [[1,3],[6,9]];
const array2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];

console.log(insertInterval(array1, [2,5]));
console.log(insertInterval(array2, [4,8]));
console.log(insertInterval([], [5,7]));
console.log(insertInterval([[1,5]], [2,3]));
console.log(insertInterval([[1,5]], [2,7]));
console.log(insertInterval([[1,5]], [5,7]));
console.log(insertInterval([[1,5]], [6,8]));
console.log(insertInterval([[1,5]], [0,3]));
console.log(insertInterval([[1,5]], [0,0]));
console.log(insertInterval([[2,5],[6,7],[8,9]], [0,1]));
console.log(insertInterval([[0,5],[8,9]], [3,4]));
console.log(insertInterval([[0,5],[9,12]], [7,16]));
//
//
