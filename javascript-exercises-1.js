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

//Ex3: Start

let providedArray = [
  { id: 1, fullName: "John Doe" },
  { id: 2, fullName: "Jim Doe" },
  { id: 3, fullName: "Jane Doe" },
];

let newObj = {};
providedArray.reduce(function (acc, curVal) {
  newObj[`${curVal["id"]}`] = { fullName: curVal["fullName"] };
}, {});
console.log(newObj);

//Ex3: End

//Ex4: Start

let providedObject = {
  1: { fullName: "John Doe" },
  2: { fullName: "Jim Doe" },
  3: { fullName: "Jane Doe" },
};

let newObj1 = [];

Object.keys(providedObject).reduce((acc, curVal) => {
  newObj1.push({ id: curVal, fullName: providedObject[curVal]["fullName"] });
}, []);
console.log(newObj1);

//Ex4: End

//Ex5: Start

const points = {
  p1: [2, 3],
  p2: [6, 7],
  get displacement() {
    return (
      ((this.p2[0] - this.p1[0]) ** 2 + (this.p2[1] - this.p1[1]) ** 2) ** 0.5
    );
  },
};

console.log(points.displacement);

//Ex5: End
