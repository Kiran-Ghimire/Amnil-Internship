const persons = [
  { name: "John Doe", grossSalary: 9500 },
  { name: "Jane Doe", grossSalary: 16500 },
  { name: "Jim Doe", grossSalary: 24999 },
  { name: "Josh Doe", grossSalary: 37000 },
];

const salaryCalculator = () => {
  let personsNetSalary = [];
  persons.forEach((person, index) => {
    const { name, grossSalary } = person;

    let netSalary = 0;

    if (grossSalary > 0 && grossSalary <= 10000) {
      tax = 0.02 * grossSalary;
      netSalary = grossSalary - tax;
    } else if (grossSalary > 10000 && grossSalary <= 20000) {
      taxAmount1 = 10000 * 0.02;
      taxAmount2 = (grossSalary - 10000) * 0.04;
      tax = taxAmount1 + taxAmount2;
      netSalary = grossSalary - tax;
    } else if (grossSalary > 20000 && grossSalary <= 30000) {
      taxAmount1 = 10000 * 0.02;
      taxAmount2 = 20000 * 0.04;
      taxAmount3 = (grossSalary % 20000) * 0.07;
      tax = taxAmount1 + taxAmount2 + taxAmount3;
      netSalary = grossSalary - tax;
    } else if (grossSalary > 30000) {
      taxAmount1 = 10000 * 0.02;
      taxAmount2 = 20000 * 0.04;
      taxAmount3 = 30000 * 0.07;
      taxAmount4 = (grossSalary - 30000) * 0.1;
      tax = taxAmount1 + taxAmount2 + taxAmount3 + taxAmount4;
      netSalary = grossSalary - tax;
    } else {
      console.log("Please input proper value");
    }

    console.log(`Net salary of ${persons[index].name} is ${netSalary}`);

    personsNetSalary.push({ name: name, netSalary: netSalary });
  });
  return personsNetSalary;
};

console.log(salaryCalculator());
