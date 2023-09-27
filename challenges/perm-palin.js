/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
  if(typeof str !== 'string') return false;
  // console.log(str.length);
  // console.log(str);
  // if(str.length === 1) return true;

  // let start = 0;
  // let end = str.length -1;
  // let mid = Math.floor(end/2);

  // let firstHalf = str.slice(start, mid + 1);
  // let secondHalf = str.slice(mid + 1, end + 1);
  // let flipSecond = '';
  // console.log(firstHalf);
  // console.log(secondHalf);



  // for(let i = secondHalf.length - 1; i >= 0; i--){
  //   flipSecond = flipSecond.concat(secondHalf[i]);
  // }

  // console.log(flipSecond);


  // if(firstHalf === flipSecond || firstHalf === secondHalf) return true;
  // if(str.length === 2) return false;
  // else{
  //   return permPalin(str.slice((str.length - 1) * -1));
  // }
  const chars = new Set()
  for(let i = 0; i < str.length; i++){
    if(!chars.has(str[i])){
      chars.add(str[i]);
    }else{
      chars.delete(str[i]);
    }
  }
 
  if(chars.size > 1) return false;
  else return true;

};

console.log(permPalin('abab'));
console.log(permPalin('cabab'));
console.log(permPalin('cabab'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));
console.log(permPalin('should return false if input is anything other than string'));

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };