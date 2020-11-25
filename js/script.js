/******************************************
        Lesson 04 advanced
*******************************************/
// используем строгий режим
'use strict';

function strRevision(str) {
  // определяем тип аргумента
  if (typeof(str) !== 'string') {
    return 'Error! Not a string type.';
  }
  // удаляем пробелы в начале и в конце строки 
  str = str.trim();
  // обрезаем строку с 30 символа и добавляем ...
  if (str.length >= 30) {
    str = str.slice(0, 30)+ '...';
  }

  return str;
}

let arg,
    strR;

// 1. вариант - задаем различные значения аргумента
arg = 4354267658;
strR = strRevision(arg);  
console.log('strR: ', strR);

arg = null;
strR = strRevision(arg);  
console.log('strR: ', strR);

arg = true;
strR = strRevision(arg);  
console.log('strR: ', strR);

arg = '  В лесу  родилась   елочка';
strR = strRevision(arg);  
console.log('strR: ', strR);

arg = '  В лесу  родилась   елочка, в лесу она росла';
strR = strRevision(arg);  
console.log('strR: ', strR);

// 2й вариант = запрос пользователю
do {
  arg = prompt('Задайте аргумент для функции');
  strR = strRevision(arg);  
  console.log('strR: ', strR);
} while (arg !== null);
