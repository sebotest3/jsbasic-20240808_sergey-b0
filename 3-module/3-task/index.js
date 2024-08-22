function camelize(str) {
  return str
    .split('-') // разбиваем строку на массив слов
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) // преобразуем каждое слово, делая первую букву заглавной (кроме первого слова)
    .join(''); // соединяем массив слов обратно в строку
}
