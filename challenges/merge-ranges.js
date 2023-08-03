/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

const mergeRanges = intervals => {
    //need an output array
    const outputArray = [];

    //split up the array into indiviual arrays
    //look at index of 0 1 compare to index of 1 0. If greater set 0 1 to 1 1  
        //if less have indx 0 1 look at 2 0

        let currentArray = intervals[0];
        console.log(currentArray)

        // for(let i = 0; i<intervals.length; i++){
        //     let currArr = intervals[i];
        //     if(!intervals[i+1]) return outputArray;
        //     for(let j = 1; j<intervals.length; i++){
        //         console.log(intervals[i])
        //         if(currArr[1] < intervals[j][0]){
        //             continue;
        //         }else{
        //             currArr[1] = intervals[j][1];
        //             outputArray.push(currArr);
        //         }
        //     }
        // }
        return outputArray;

  
};

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(intervals)); 

module.exports = {mergeRanges};
