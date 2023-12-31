/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    let vowels = ('aeiou');
    let countedVowels = ('');
    let array = string.split('');

    let threeChecker = array.reduce(function(accumulator, element) {
        if (vowels.includes(element) && !countedVowels.includes(element)) {
            accumulator++;
            countedVowels += element;
        }
        return accumulator;
    }, 0);

    return threeChecker >= 3;
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
