/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {

  if(!string.length) return false;
  let subStringVal = substring[0];
  let stringVal = string[0]

  if(stringVal === subStringVal){
    let temp = string;
    let sliceBit = temp.slice(0, substring.length);
    if(sliceBit === substring) return true;
    else return needleInHaystack(string.slice(1), substring)
  }else{
    return needleInHaystack(string.slice(1), substring);
  }


};

console.log(needleInHaystack('xztzcatbfbbq', 'cat'));

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {
  if(!string.length) return false;
  let subStringVal = substring[0];
  let stringVal = string[0]

  // if(stringVal === subStringVal || "_"){
  //   let temp = string;
  //   let subTemp = substring;
  //   let sliceBit = temp.slice(0, substring.length);
  //   function helper(stringTemp, substringTemp){
  //     if(stringTemp === substringTemp) return true;
  //       if(stringTemp[0] === "_" || substringTemp[0] === "_"){
  //        return helper(stringTemp.slice(1), substringTemp.slice(1));
  //       }
      
  //   }
    
  //   helper(sliceBit, subTemp);
  //   return needleInHaystackWithWildcards(string.slice(1), substring)
  // }
};

console.log(needleInHaystackWithWildcards('_ello_orld', 'helloworl_'))

module.exports = { needleInHaystack, needleInHaystackWithWildcards };