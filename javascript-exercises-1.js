//Ex1: Start

String.prototype.isPalindrome = function () {
  var cleaned = this.toLowerCase().match(/[a-z]/gi).reverse();

  return cleaned.join() === cleaned.reverse().join();
};

let word1 = "level";
let word2 = "shovel";
console.log(word1.isPalindrome());
console.log(word2.isPalindrome());

//Ex1: End

//Ex 2: Start

var myNum = new Number();

Number.prototype.cube = function (x) {
  let numSqr;
  numSqr = x ** 3;
  return numSqr;
};
console.log(` ${myNum.cube(2)} `);

//Ex 2: End
