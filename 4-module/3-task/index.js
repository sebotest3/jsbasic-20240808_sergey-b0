function highlight(table) {
  // Получаем все строки таблицы
  const rows = table.querySelectorAll('tbody tr');

  // Для каждой строки
  rows.forEach((row) => {
    // Получаем ячейку с данными о статусе и значение её атрибута data-available
    const statusCell = row.querySelector('td[data-available]');
    const isAvailable = statusCell?.dataset.available;

    // Если атрибут data-available есть
    if (isAvailable !== undefined) {
      // Добавляем класс available или unavailable в зависимости от значения атрибута
      isAvailable === 'true' ? row.classList.add('available') : row.classList.add('unavailable');
    } else {
      // Если атрибута data-available нет, скрываем строку
      row.setAttribute('hidden', true);
    }

    // Получаем ячейку с полом и её содержимое
    const genderCell = row.querySelector('td:nth-child(3)');
    const gender = genderCell.textContent;

    // Добавляем класс male или female в зависимости от пола
    gender === 'm' ? row.classList.add('male') : row.classList.add('female');

    // Получаем ячейку с возрастом и её содержимое
    const ageCell = row.querySelector('td:nth-child(2)');
    const age = parseInt(ageCell.textContent, 10);

    // Если возраст меньше 18, добавляем зачёркивание
    if (parseInt(ageCell.textContent) < 18) {
      row.style.setProperty('text-decoration', 'line-through');
    }
  });
}
