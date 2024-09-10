function getMinMax(str) {
  // Разделяем строку на массив чисел, используя пробел как разделитель
  const numbers = str.split(' ').map(Number);

  // Инициализируем минмальное и максимальное значения
  let min = Infinity;
  let max = -Infinity;

  // Перебираем массив чисел и обновляем минимальное и максимальное значения
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
  }

  // Возвращаем объект с минимальным и максимальным значениями
  return { min, max };
}
