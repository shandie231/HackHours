/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = array => {
  let length = (array.length * 2) - 1;
  const ogLength = array.length;
  for(let i = 0; i<ogLength; i++){
    array[length] = array[0];
    array.splice(0,1);
    length = length - 2;
  };
  


  return array;

  
};
const array1 = [1,2,3,4,5];
const array2 = [5,3,1,4,2];
console.log(reverseArray(array1));
console.log(reverseArray(array2));

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {
  let start = 0;
  let end = 0;
  
  for(let i = 0; i<sentence.length; i++){
  
    
  }
  
};

module.exports = {reverseArray, reverseSentence};
