function makeDiagonalRed(table) {
  // Проходим по строкам таблицы
  for (let i = 0; i < table.rows.length; i++) {
    // Получаем текущую строку
    let row = table.rows[i];

    // Получаем ячейку, находящуюся на диагонали
    let cell = row.cells[i];

    // Устанавливаем красный цвет фона для диагональной ячейки
    cell.style.backgroundColor = 'red';
  }
}

// Пример использования функции
let table = document.querySelector('table');  // Получаем элемент <table>
makeDiagonalRed(table); // Применяем функцию для выделения диагональных ячеек

