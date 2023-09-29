/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0], a
  [1, 1, 0, 0, 0], b
  [0, 0, 1, 0, 0], c
  [0, 0, 0, 1, 1] d
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = grid => {
  const coor = {};
  for(let i = 0; i<grid.length; i++){
    for(let j = 0; j<grid[i].length; j++){
      let xCoor = i * 10;
      let currentCoor = xCoor + j;
      coor[currentCoor] = grid[i][j]
    }
  }

    function finder(obj, coordinate){
      if(coordinate > 10 && coordinate < 30){
        if(obj[coordinate] === 1){
        
        }
      }
      

      }
    
  return coor;
};

console.log(numIslands([
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]));

module.exports = {numIslands};
