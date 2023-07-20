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
     let output = [];
     let newFloor = [];
     //iterate to create the indiviual floors
     //for(let k = 0; k<n; k++){
          if(spaces > 0){
               for(let j = 0; j<spaces; j++){
                    output.push(" ");
                    console.log(output);
               }
               for(let i = spaces; i<n; i++){
                    output.push("*");
                    console.log(output);
               }
               newFloor = [output].toString();
          }
     //}

     // for(let i = 0; i<n; i++){
     //      if(spaces > 0){

     //      }
     //      output.push("*");
     // }
     //newFloor = [[newFloor],[output]];
     return newFloor;
     
};

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
