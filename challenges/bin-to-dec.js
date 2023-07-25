/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    //declare an exponent varibale to keepo track of the exponent at each index
    //declara a total variable
    //declarea a current Number variable to work with each number through the iteration
    let exponent = binString.length - 1;
    let total = 0;
    let currNum;

    //iterate over the input string 
    for(let i = 0; i<binString.length; i++){
        //set the current number to the input string at index i
            //will iterate throught the stirng
        currNum = binString[i];

        //multiply the current number to 2 to the power of exponent
            //exponent is the inverse of the index
                //index: 0,1,2,3,4,5
                //exponent: 5,4,3,3,2,1
        currNum *= (2 ** exponent);
        //decrememt the index after each run
        exponent--;
        //combine the currNums from each iteration to get the final total
        total += currNum;
    }

    //output the total
    return total;

}

console.log(binToDec('0'))
console.log(binToDec('0'))   //-> 0
console.log(binToDec('11'))  //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101')) 
console.log(binToDec('0101'))
console.log(binToDec('101010'))



module.exports = {binToDec};