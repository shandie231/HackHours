/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  
  const result = [];

  breathFirstSearch('', 0, 0);
  return result;

  function breathFirstSearch(str, left, right){
    if(left === n && right === n){
      result.push(str);
      return;
    }
    if(left !== n){
      breathFirstSearch(str + '(', left + 1, right);
    }
    if(left > right){
      breathFirstSearch(str + ')', left, right + 1);
    }
  }
};

console.log(generateParentheses(1));

module.exports = {generateParentheses};
