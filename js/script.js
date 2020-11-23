/******************************************
        Lesson 03 advanced
*******************************************/
// используем строгий режим
'use strict';

// объявление переменных
let lang = 'ru';
// различные способы объявления через массив 
let arrWeek = [
	['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
	['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье']
];
let arrWeekEngName = 
['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];
let arrWeekRuName = 
['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// лучший на мой взгляд вариант
let arrWeekMultLang = {
  'en':arrWeekEngName,
	'ru':arrWeekRuName
}

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

// в зависимости от значения переменной lang получаем нужные данные 
// без использования операторов условий
// лучший вариант
console.log(arrWeekMultLang[lang]);

// 2. **********************************

let namePerson = 'Артем';

//используем тернарный оператор
namePerson === 'Артем' ? console.log('Директор') 
    : namePerson === 'Максим' ? console.log('Преподаватель')
    : console.log('Студент');
