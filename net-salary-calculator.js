const persons = [
  { name: "John Doe", grossSalary: 9500 },
  { name: "Jane Doe", grossSalary: 16500 },
  { name: "Jim Doe", grossSalary: 24999 },
  { name: "Josh Doe", grossSalary: 37000 },
];

//Test case: besides provided tax slab, one should be able to update taxInPercentage or add/remove taxSlab 

const taxSlabs = [
  { gt: 0, lte: 10000, tax: 2},
  { gt: 10000, lte: 20000, tax: 4},
  { gt: 20000, lte: 30000, tax: 7},
  { gt: 30000, lte: 9999999999, tax: 10},
];


const taxCalculator = (salary) => {
  let tax = 0;
  for (let i = 0; i < taxSlabs.length; i++){
    if ( salary > 0 && salary < 10000){
      tax = taxSlabs.filter((data, i) => (data.gt == 0 && data.lte <= 10000))[0].tax
      
      break;
    }else if ( salary >= 10000 && salary < 20000){
      
      tax = taxSlabs.filter((data, i) => (data.gt == 10000 && data.lte <= 20000))[0].tax
      
      break;
    }else if (salary >= 20000 && salary < 30000){
      tax = taxSlabs.filter((data, i) => (data.gt == 20000 && data.lte <= 30000))[0].tax
      
      break;
    }else if (salary >= 30000 && salary <= 9999999999 ) {

      
      tax = taxSlabs.filter((data, i) => (data.gt == 30000 && data.lte <= 9999999999))[0].tax
      
      break;
    } 

  }

return tax;
}
// console.log(taxCalculator(5000));



const salaryCalculator = () => {

  

  let personsNetSalary = [];
  persons.forEach((person, index) => {
    const { name, grossSalary } = person;

    let netSalary = 0;

    if (grossSalary > 0 && grossSalary <= 10000) {
      tax = (taxCalculator(grossSalary)/100) * grossSalary;
      netSalary = grossSalary - tax;
    } else if (grossSalary > 10000 && grossSalary <= 20000) {
      tax = (taxCalculator(grossSalary)/100) * grossSalary;
      netSalary = grossSalary - tax;
    } else if (grossSalary > 20000 && grossSalary <= 30000) {
      tax = (taxCalculator(grossSalary)/100) * grossSalary;
      netSalary = grossSalary - tax;
    } else if (grossSalary > 30000 && grossSalary <= 9999999999 ) {
      tax = (taxCalculator(grossSalary)/100) * grossSalary;
      netSalary = grossSalary - tax;
    } else {
      console.log("Please input proper value", grossSalary);

    }

    console.log(`Net salary of ${persons[index].name} is ${netSalary}`);


    personsNetSalary.push({ name: name, netSalary: netSalary });
  });
  taxCalculator();
  return personsNetSalary;
};

console.log(salaryCalculator());



