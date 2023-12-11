/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  //total from all boxes
  let total = 0;
  //specific box currently working with represented by index
  let boxes = 0;

  //as long as the truckSize is greater than 0, continue the loop
  while(truckSize > 0){
    //if all boxes can fit on truck return the total
    if(truckSize.length === 0) return total;
    //units and removed are in the while loop so they reset to 0 on each iteration.
    let units = 0;
    //removed is the index placeholder of the box being placed on the truck
    let removed = 0;

    //iterate through array of boxes
    for(let i = 0; i < boxTypes.length; i++){
      //store the value of the greatest unit, corresponding # of boxes, and the index
      if(boxTypes[i][1] > units){
        units = boxTypes[i][1];
        boxes = boxTypes[i][0];
        removed = i;
      }
    }
    //adjust trick size by subtracting amount of boxes. Increment total
    truckSize = truckSize - boxes;
    total = total + (units * boxes);

    //removed the boxes added to truck from the array. Using the removed variable declared earlier
    boxTypes.splice(removed, 1);

    //if more boxes are removed than can fit on truck, add boxes back to array and correspondingly adjust total 
    if(truckSize < 0){
      let difference = Math.abs(truckSize);
      truckSize += difference;
      total = total - (difference * units);
    }
  }
//return total
  return total;
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));


const  maximumUnitsBest = (B, T) => {
  B.sort((a,b) => b[1] - a[1])
  let ans = 0;
  for(let i = 0; T && i < B.length; i++){
    let count = Math.min(B[i][0], T)
    ans += count * B[i][1], T -= count;
  }
  return ans
}

console.log(maximumUnitsBest([[1,3],[2,2],[3,1]], 4))