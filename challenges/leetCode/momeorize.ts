const add = (n:number):number => (n + 10);

console.log(add(9));

const memoizeAdd = () => {
  type cache = {
    [key: number]: number;
  }
  let cache: cache = {};
  return (n: number) => {
    if(n in cache) {
      console.log('fetching from cache');
      return cache[n];
    }else{
      console.log('Calculating Result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
const newAdd = memoizeAdd();
console.log(newAdd(9));
console.log(newAdd(9));

const newAdd2 = memoizeAdd();
console.log(newAdd2(5));
console.log(newAdd2(5));