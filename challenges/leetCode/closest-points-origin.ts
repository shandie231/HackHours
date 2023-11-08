/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

EX: 

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].


Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.


*/



const kClosest = (points: number[][], k: number): number[][] => {
  const output: number[][] = [];
  type cache = {
    [distance: number]: number[];
  }
  const cache: cache = {}
  const cacheKeys: number[] = [];

  for(let i:number = 0; i<points.length; i++){
    let x: number = points[i][0];
    let y: number = points[i][1];
    let distance: number = Math.sqrt(((x - 0) ** 2) + ((y - 0) ** 2))
    if(cache[distance]){
      output.push(points[i])
    }else{
      cache[distance] = points[i];
    }
    cacheKeys.push(distance);
  }
  console.log(cache)
  cacheKeys.sort(function(a, b){
    return a - b;
  });
  while(output.length < k){
    let keyVal: number = cacheKeys[output.length];
    output.push(cache[keyVal])
  }
  return output;
}

console.log(kClosest([[1,3],[-2,2]], 1));
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
console.log(kClosest([[-2,10],[-4,-8],[10,7],[-4,-7]], 3));
console.log(kClosest([[0,1],[1,0]], 2));