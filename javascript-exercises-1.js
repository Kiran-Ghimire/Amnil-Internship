//Task 1

String.prototype.isPalindrome = function () {
  var cleaned = this.toLowerCase().match(/[a-z]/gi).reverse();

  return cleaned.join() === cleaned.reverse().join();
};

let word1 = "level";
let word2 = "shovel";
console.log(word1.isPalindrome());
console.log(word2.isPalindrome());
