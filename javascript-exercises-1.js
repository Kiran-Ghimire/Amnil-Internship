//Ex1: Start

String.prototype.isPalindrome = function () {
  var cleaned = this.toLowerCase().match(/[a-z]/gi).reverse();

  return cleaned.join() === cleaned.reverse().join();
};

let word1 = "level";
let word2 = "shovel";
if (word1.length == 0) {
  console.log("Please input proper value");
} else {
  console.log(word1.isPalindrome());
}
if (word2.length == 0) {
  console.log("Please input proper value");
} else {
  console.log(word2.isPalindrome());
}

//Ex1: End

//Ex 2: Start

var myNum = new Number();

Number.prototype.cube = function (x) {
  let numCub;
  numCub = x ** 3;
  return numCub;
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

//Ex6: Start

function Person() {}

let person = new Person();

person.firstName = "John ";
person.lastName = "Doe";
person.dob = "1996-03-27";
person.fullName = function () {
  return person.firstName + person.lastName;
};

console.log(person.fullName());

person.age = function (date = this.dob) {
  const startDate = new Date(date + " " + "12:00 AM");
  const endDate = new Date();

  const diffDate = new Date(new Date() - startDate);

  const yearDiff = diffDate.toISOString().slice(0, 4) - 1970;

  const monthDiff = diffDate.getMonth();

  const mon = Math.floor(monthDiff * 30);

  const dayDiff = diffDate.getDate() - 1;

  const day = mon + dayDiff;

  let label = "";

  if (yearDiff > 0) {
    label += yearDiff > 1 ? yearDiff + " years, " : yearDiff + " year, ";
  }

  if (day > 0) {
    label += day > 1 ? day + " days " : day + " day ";
  }

  return label;
};
console.log(person.age());

//Ex6: End

//Ex7: Start

function recursion(num) {
  console.log(num);

  if (num != 0) num > 0 ? recursion(num - 1) : recursion(num + 1);
}
recursion(5);

//Ex7: End
