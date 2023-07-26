/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  let outcome = 1;
  
  for(let i = 0; i<power; i++){
    outcome *= base;
  }
  return outcome;

  
}
console.log(pow(2,4));
console.log(pow(4,4))
console.log(pow(4,10))
console.log(pow(5,0))

/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

//this prompt is asking me for what I did above. So Look above for pseudo code
function powRecurse(base, power, outcome = 1) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  //using recursion

  //base case to see if the power value has reached zero. If it has return the outcome
  if(power === 0) return outcome;

  //check if base and power inputs are there
  if(!base || !power) return "Gimme Values";

  //set the outcome to outcome ^ base. outcome will update each time while base remains the same. This ends when the power reaches 0
  outcome *= base;

  //decrement power 
  power--;

  //recursively call the function updating base(whcih doesnt change) the power after the decrement and the outcome after updating
  return powRecurse(base, power, outcome)
}
console.log(powRecurse(2,4));
console.log(powRecurse(4,4))
console.log(powRecurse(4,10))
console.log(powRecurse(5,1))
console.log(powRecurse(5,2))
console.log(powRecurse(3,4))

module.exports = { pow, powRecurse };
