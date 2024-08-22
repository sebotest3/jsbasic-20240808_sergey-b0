function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`)
    .join('\n');
}

console.log(showSalary(users, 40)); // выведет зарплаты пользователей до 40 лет
console.log(showSalary(users, 30)); // выведет зарплаты пользователей до 30 лет
// в учебнике случайно нажал на кнопку сравнить с решением автора, я его не смотрел, даже не обновлял гит, прошу не обнулять решение)
