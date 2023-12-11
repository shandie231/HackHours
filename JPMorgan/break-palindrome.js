

const breakPalindrome = (palindrome) => {
  if(palindrome.length === 1) return '';

  for(let i = 0, j = palindrome.length-1; i < j; i++, j--){
    if(palindrome[i] === 'a'){
    continue;
    };

  if(palindrome[i] !== 'a'){
      console.log(palindrome)
      let start = palindrome.slice(0,i);
      let end = palindrome.slice(i+1, palindrome.length)
      palindrome = start.concat('a'.concat(end));
      return palindrome;
  }
    


  }

      let aStart = palindrome.slice(0,palindrome.length-1);
      palindrome = aStart.concat('b');
      return palindrome;
}

console.log(breakPalindrome('abccba'));
console.log(breakPalindrome('zgz'));
console.log(breakPalindrome('aabbbaa'));
console.log(breakPalindrome('bbbbbbb'));