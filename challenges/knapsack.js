/*
  You have a knapsack with a weight limit.
  You are also presented with a list of singular items, each with a weight and a value.
  Each item can be counted only once.
  What is the optimal total value of a set of items that can fit in your knapsack?

  You are presented with an array of singlular objects, each object has a weight and value.
  Imagine that each object represents a unique item, to be counted once.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [
    {weight: 1, value : 3}, 
    {weight: 2, value : 4}, 
    {weight: 3, value : 5},
  ];
  knapsack(items, 3); // returns 7 (from items[0] and items[1])
  knapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

const knapsack = () => {

};

/*
  Extension: complete knapsack with Bottom-Up Dynamic Programming
  Hint: Use a matrix/table (an array of arrays)
*/
const knapsackAdvanced = () => {

};

module.exports = { knapsack, knapsackAdvanced };