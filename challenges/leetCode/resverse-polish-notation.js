/*
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens){
  if(tokens.length === 0) return undefined
  for(let i = 0; i < tokens.length; i++){
    if(tokens[i] === "+"){
      tokens[i-2] = tokens[i-2] + tokens[i-1];
    }else if(tokens[i] === "-"){
      tokens[i-2] = tokens[i-2] - tokens[i-1];
    }else if(tokens[i] === "*"){
      tokens[i-2] = tokens[i-2] * tokens[i-1];
    }else if(tokens[i] === "/"){
      tokens[i-2] = Math.trunc(tokens[i-2] / tokens[i-1]);
    }
    else{
      tokens[i] = Number(tokens[i]);
      continue;
    }
    tokens.splice((i-1), 2)
    i = i -2;
  }
return tokens[0]
}


console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
console.log(evalRPN(["-78","-33","196","+","-19","-","115","+","-","-99","/","-18","8","*","-86","-","-","16","/","26","-14","-","-","47","-","101","-","163","*","143","-","0","-","171","+","120","*","-60","+","156","/","173","/","-24","11","+","21","/","*","44","*","180","70","-40","-","*","86","132","-84","+","*","-","38","/","/","21","28","/","+","83","/","-31","156","-","+","28","/","95","-","120","+","8","*","90","-","-94","*","-73","/","-62","/","93","*","196","-","-59","+","187","-","143","/","-79","-89","+","-"]));