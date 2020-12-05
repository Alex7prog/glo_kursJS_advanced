/******************************************
        Lesson 09 advanced
*******************************************/

'use strict';

const timeA = document.querySelector('#time-a'),
    timeB = document.querySelector('#time-b'),
    btnStart = document.querySelector('#time-b');

let now = Date();

// формат даты - а
Date.prototype.formatA = function() {

    const d = this.getDate(),
        w = this.getDay(),
        m = this.getMonth(),
        y = this.getFullYear(),
        hh = this.getHours(),
        mm = this.getMinutes(),
        ss = this.getSeconds(),
        t = (this.toTimeString()).substr(0, 8);

    // формат число месяца
    let fDate = this.toLocaleString('ru', { weekday: 'long' });
    fDate = fDate.replace(fDate[0], fDate.charAt(0).toUpperCase());

    // формат месяца
    let fMonth = this.toLocaleString('ru', { month: 'long' });

    if (fMonth.substr(-1) === 'т') {
        fMonth += 'а';
    } else {
        fMonth = fMonth.slice(0,-1) + 'я';
    }

    // формат часов
    let hhStr;

    switch (hh) {
        case 1:
        case 21:
            hhStr = ' час ';  
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
            hhStr = ' часа '; 
            break;
        default:
            hhStr = ' часов '; 
            break;
    }
    
    // формат минут
    let mmStr, 
        mmCheck = mm;

    if (mm > 20) { 
        mmCheck = Number( String(mm).substr(-1) );
    } 

    switch (mmCheck) {
        case 1:
            mmStr = ' минута ';  
            break;
        case 2:
        case 3:
        case 4:
            mmStr = ' минуты '; 
            break;
        default:
            mmStr = ' минут '; 
            break;
    }
    
    // формат секунд
    let ssStr, 
        ssCheck = ss;

    if (ss > 20) { 
        ssCheck = Number( String(ss).substr(-1) );
    } 

    switch (ssCheck) {
        case 1:
            ssStr = ' секунда';  
            break;
        case 2:
        case 3:
        case 4:
            ssStr = ' секунды'; 
            break;
        default:
            ssStr = ' секунд'; 
            break;
    }
    
    return 'a) Сегодня ' + fDate + ', ' + d + ' ' + fMonth  + ' ' + y + ' года, ' +
    hh + ' ' + hhStr + ' ' + mm + mmStr + ss + ssStr;
};
// формат даты - б
Date.prototype.formatB = function() {

    let d = this.getDate(),
        m = this.getMonth(),
        y = this.getFullYear(),
        t = (this.toTimeString()).substr(0, 8);

    d = (d < 10) ? '0' + d : d;
    m = (m < 10) ? '0' + m : m;
    t = t.substr(0, 8);

    return 'б) '+ [d, m, y].join('.') + ' - ' + t;

    }
 

timeA.setAttribute("style", "color: red;");
timeB.setAttribute("style", "color: red;");

// отображаем текущее время каждую 1 сек. 
let timerId = setInterval(function() {
    now = new Date();
    timeA.textContent = now.formatA();
    timeB.textContent = now.formatB();
}, 1000);
    


