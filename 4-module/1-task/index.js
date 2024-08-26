function makeFriendsList(friends) {
  // Создаем элемент ul
  const ul = document.createElement('ul');

  // Для каждого друга из массива
  friends.forEach(friend => {
      // Создаем элемент li
      const li = document.createElement('li');

      // Записываем в li полное имя друга
      li.textContent = `${friend.firstName} ${friend.lastName}`;

      // Добавляем созданный li внутрь ul
      ul.appendChild(li);
  });

  // Возвращаем созданный элемент ul
  return ul;
}

// Пример вызова функции
let friends = [
  {
      firstName: 'Artsiom',
      lastName: 'Mezin'
  },
  {
      firstName: 'Ilia',
      lastName: 'Kantor'
  },
  {
      firstName: 'Christopher',
      lastName: 'Michael'
  }
];

// Получаем и выводим на экран HTML элемент ul с друзьями
document.body.appendChild(makeFriendsList(friends));
