/******************************************
        Lesson 05 advanced
*******************************************/
// используем строгий режим
'use strict';
// 1-е задание
let arr = [];

for (let i = 0; i <= 7; i++) {
  arr[i] = String((i+3) * 4689846); 
  // 1-й способ
  if (arr[i][0] == 2 || arr[i][0] == 4) {
    console.log('arr[' + i + ']: ', arr[i]);  
  }
  // 2-й способ
  if (arr[i].indexOf('2') == 0 || arr[i].indexOf('4') == 0) {
    console.log('arr[' + i + ']: ', arr[i]);  
  }
}

// 2-е задание
let num,
    isSimpleNumber = true;

for (let num = 2; num < 100; num++) {

  for (let i =2; i < num; i++) {
    if (num % i === 0) {
      isSimpleNumber = false;
      break;
    }
  }
  
  if (isSimpleNumber === true) {
    console.log('простое число: ' + num + ', делители этого числа: 1 и ' + num, );
  }
  isSimpleNumber = true;

}    



