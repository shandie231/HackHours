/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
     //declare vaible to represent the spaces
     let spaces = n-1;
     //declare empty array to fill 
     let output = "";
     let newFloor = "";
     let arrString = "";

     //create empty array filled iwth spaces from n
     // for(let i = 0; i<n; i++){
     //      output += " ";
     // }
     //iterate over output array and fill with spaces and astrics
     for(let y = 0; y<n; y++){
          for(let x = 0; x< n + y; x++){
               if(x === n){
                    break;
               }
               if(x >= n - y - 1){
                    output += "*";
               }else{
                    output += " ";
               }
          }
          output += '\n';
     }
     return output;
}

console.log(drawStairs(6));

/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {

};

module.exports = { drawStairs, drawStar };
