/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {

    const parens = new Map();

    const onlyParens = input.replace(/[a-zA-Z0-9:=<>.]/g, '');
    console.log(onlyParens);

    for(const currentParen of onlyParens){
        if(!parens.has(currentParen)){
            parens.set(currentParen, 1);
        }else{
            parens.set(currentParen, parens.get(currentParen) + 1);
        }
    }
    
    const incommon = [...parens.keys()];
    console.log(incommon)
    for(const currentCommon of incommon){
        switch (currentCommon){
            case "[":
            
        }
    }


};


console.log(balancedParens('[](){}'));
//console.log(balancedParens(' const wow = { yo: thisIsAwesome() }'));
//console.log(balancedParens(' const newton = () => { telescopes.areSicc(); '));

module.exports = { balancedParens} ;
