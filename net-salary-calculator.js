const persons = [
  { name: "John Doe", grossSalary: 9500 },
  { name: "Jane Doe", grossSalary: 16500 },
  { name: "Jim Doe", grossSalary: 24999 },
  { name: "Josh Doe", grossSalary: 37000 },
];



const taxSlabs = [
  { gt: 0, lte: 10000, tax: 2},
  { gt: 10000, lte: 20000, tax: 4},
  { gt: 20000, lte: 30000, tax: 7},
  { gt: 30000, lte: 9999999999, tax: 10},
];


const netSalaryCalculator = (grossSalary) => {
  
  let remainderGrossSalary= grossSalary;
  let totalTaxAmount = 0;
  
  taxSlabs.forEach(slab => {
      const range= slab.lte - slab.gt;
      
      let taxableAmount= 0;
      let taxAmount = 0;
      if (remainderGrossSalary <= range){
          taxableAmt = remainderGrossSalary;
          remainderGrossSalary = 0;
      } else {
          taxableAmt = range;
          remainderGrossSalary= remainderGrossSalary - range  
      }
      taxAmount = taxableAmount * (slab.tax / 100);
      totalTaxAmount += taxAmount;
      
      
  });
  
  return Math.ceil(totalTaxAmount);
}


 persons.map (person => {
   console.log(`${person.name} ${person.grossSalary - netSalaryCalculator(person.grossSalary)}`)
 })