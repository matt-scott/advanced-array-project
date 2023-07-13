/*
Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.
*/

let twoDimensionalProduct = function(arr) {
    let accumulator = 1;

    arr.forEach( function(row) {

        row.forEach( function(column) {
            accumulator *= column;
        })

    })

    return accumulator;
};

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
  ];
  console.log(twoDimensionalProduct(arr1)); // 360

  let arr2 = [
    [11, 4],
    [2]
  ];
  console.log(twoDimensionalProduct(arr2)); // 88
