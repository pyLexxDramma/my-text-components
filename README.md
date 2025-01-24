Создание страницы, отображающей список компонентов с помощью библиотеки React. Каждый из компонентов состоит из трех частей: заголовок, список, текстовое описание.


Данные передаются с сервера в виде JSON-структуры:

[
  {
    "header": "Заголовок 1",
    "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
    "text": "какой-то текст 1 текст какой-то 1 какой-то"
  }
]
Страница должна:

позволять пользователю удобно просматривать несколько компонентов одновременно;
быть адаптивной к разному размеру списков внутри компонентов, длиннее текста;
быть кроссбраузерной и работать в IE9+;
обеспечить возможность применения в других страницах