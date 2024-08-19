function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    let value = salaries[key];

    if (typeof value === 'number' && isFinite(value)) {
      sum += value;
    }
  }

  return sum;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

console.log(sumSalary(salaries)); // 3900
