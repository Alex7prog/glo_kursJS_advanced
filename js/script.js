/******************************************
        Lesson 03 advanced
*******************************************/
// используем строгий режим
'use strict';

// объявление переменных
let lang = 'en';
// различные способы объявления через массив 
let arrWeek = [
	['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
	['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье']
];
let arrWeekEngName = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];
let arrWeekRuName = ['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


// 1. **********************************
// используем if
if (lang === 'en') {
	console.log(arrWeek[0]);	
	//alert(arrWeekEngName);
} else {
	console.log(arrWeek[1]);
}
// используем switch уже с другим массивом (для наглядности)
switch (lang) {
  case 'en':
    console.log(arrWeekEngName);
    break;
  case 'ru':
    console.log(arrWeekRuName);
    break;
  default:
    console.log('Error!');
    break;
}

// объявляем массив (ассоциативный)
let arrWeekMultLang = [];
arrWeekMultLang.en = arrWeekEngName;
arrWeekMultLang.ru = arrWeekRuName;
// 2у мерный массив
console.dir(arrWeekMultLang);
// вывод в консоль недели ру/англ в зависимости от значения lang
lang === 'en' ? console.log(arrWeekMultLang.en) : console.log(arrWeekMultLang.ru);


// 2. **********************************

let namePerson = 'Артем';

//используем тернарный оператор
namePerson === 'Артем' ? console.log('Директор') 
    : namePerson === 'Максим' ? console.log('Преподаватель')
    : console.log('Студент');
