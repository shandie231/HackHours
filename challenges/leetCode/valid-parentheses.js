/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s){
  const obj = {};
  for(let i = 0; i<s.length; i++){
    if(s[i] === '[' || s[i] === '{' || s[i] === '(' || s[i] === '<'){
      if(!obj[s[i]]){
        obj[s[i]] = 1;
      }else{
        obj[s[i]] = obj[s[i]] + 1;
      }

    }else if(s[i] === ']'){
      if(!obj['[']) return false;
      else obj['[']--;
    }else if(s[i] === '}'){
      if(!obj['{']) return false;
      else obj['{']--;
    }else if(s[i] === ')'){
      if(!obj['(']) return false;
      else obj['(']--;
    }else if(s[i] === '>'){
      if(!obj['<']) return false;
      else obj['<']--;
    }else return false;
  }
  console.log(obj);
  let values = Object.values(obj);
  for(let i = 0; i<values.length; i++){
    if(values[i] !== 0) return false;

  }
  return true;
}

console.log(isValid('{}[]()'));  
console.log(isValid(''))