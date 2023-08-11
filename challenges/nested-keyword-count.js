/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword, count = 0) => {

    array.forEach(el => {
        if(Array.isArray(el)) count = keywordCount(el, keyword, count);
        if(el === keyword) ++count;
    });
    return count;

  
};
console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi'));
// -> 2 because 'hi' appears twice
console.log(keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x'));
// -> 3
console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol'));
// -> 0


/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = (array, obj = {}) => {
    
    array.forEach(el => {
        if(Array.isArray(el)) keywordMode(el, obj);
        if(!obj[el]) {
            obj[el] = 1;
        }
        else obj[el]++;
    });
    return obj;
    
  
};

console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])); 
//-> ['bat', 'cars']
console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool'])); 
//-> ['cool']

module.exports = {keywordCount, keywordMode};
