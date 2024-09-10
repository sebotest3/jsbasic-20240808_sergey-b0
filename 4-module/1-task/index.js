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
