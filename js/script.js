/******************************************
        Lesson 02 advanced
*******************************************/
// директива строгого режима, скрипт работает в «современном» режиме.
"use strict";

// объявляем переменную - num
let num = 266219;

// приводим num к типу строка и разбиваем на массив посимвольно
//2 й вариант let arrayStr = String(num).split('');
let arrayStr = num.toString().split('');

//1й вариант (предпочтительный)
//перемножаем все элементы массива методом перебора reduce 
//и выводим в консоль
let resultArrayMult = arrayStr.reduce(function(mult, current) 
                {return mult * current;});
console.log('Перемноженные цифры числа ' + num + ' (перебором): ', resultArrayMult);

//2й вариант
//перемножаем все элементы массива в цикле и выводим в консоль
resultArrayMult = 1;
for (let i = 0; i < arrayStr.length; i++) {
        resultArrayMult = resultArrayMult*arrayStr[i];
}
console.log('Перемноженные цифры числа ' + num + ' (в цикле): ', resultArrayMult);

// возводим результат перемножения массива в 3ю степень
let result = resultArrayMult**3;

// приводим result к типу строка 
//и выводим в консоль 1-е 2-е цифры результата возведения в степень
console.log('1я цифра результата ' + result + ':', result.toString()[0], 
            '\n2я цифра результата '+ result + ':', result.toString()[1]);


