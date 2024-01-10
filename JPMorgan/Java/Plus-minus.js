const lonelyInteger = (a) => {
  const cache = {};
  let output;

  for(let i = 0; i<a.length; i++){
    if(cache[a[i]]){
      cache[a[i]]++;
    }else{
      cache[a[i]] = 1;
    }
  };
  const keys = Object.keys(cache);

  keys.forEach(num => {

    if(cache[num] === 1){
      output = num;
    }
  })


return output;
}

console.log(lonelyInteger([1,2,3,4,3,2,1]));




function flippingMatrix(matrix){
  let n = matrix.length / 2;
  let max = 0;
  let total = 0;

  for(let row = 0; row < n; row++){
    for(let col = 0; col < n; coll++){
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][col], max);
      max = Math.max(matrix[row][2 * n - col - 1], max);
      max = Math.max(matrix[2 * n - row - 1][col], max);
      max = Math.max(matrix[2 * n - row -1][2 * n - col - 1], max);

      total += max;
    }
  }
  return total;
}