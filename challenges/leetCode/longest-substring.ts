/* 

Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

const lengthOfLongestSubstring = (s:string): number =>{
  let substring: string = '';
  const subStringArray: string[] = [];
  let maxLength: number = 0;
  let start: number = 0;
  for(let i = 0; i<s.length; i++){
    
    if(!substring.includes(s[i])){
      substring = substring + s[i];
      
    }else{
      start++;
      i = start;
      substring = s[i];
    }
    maxLength = Math.max(substring.length, maxLength);

  } 

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); //abc
console.log(lengthOfLongestSubstring("bbbbb"));  //b
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("  "));  
console.log(lengthOfLongestSubstring("aab"));  //wke


const lengthOfLongestSubstringLeat = (s: string): number => {
  const scanner: string[] = [];
  let longest = 0;

  for( const char of s){
    const possibleIndex = scanner.indexOf(char);

    if (possibleIndex !== -1) {
      scanner.splice(0, possibleIndex + 1)
    }
    scanner.push(char);
    longest = Math.max(longest, scanner.length);
  }
  return longest;
} 

console.log(lengthOfLongestSubstringLeat('abcabcbb'));