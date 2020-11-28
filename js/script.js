/******************************************
        Lesson 07 advanced
*******************************************/

const week = ['Понедельник', 
            'Вторник', 
            'Среда', 
            'Четверг', 
            'Пятница', 
            'Суббота', 
            'Воскресенье'],
      currentDay = new Date();

let formatStrDay,
    dayWeek;
  
// 1й способ
document.write('<p><b><i>1-й способ ( document.write() ):</i></b></p>');

for (let i = 0; i < 7; i++) {

  formatStrDay = week[i];

  if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    formatStrDay = '<i>' + formatStrDay + '</i>';
  } 
  if (i === currentDay.getUTCDay()-1) {
    formatStrDay = '<b>' + formatStrDay + '</b>';
  } 
  
  formatStrDay = '<p>'+ formatStrDay + '</p>';
  document.write(formatStrDay);
  formatStrDay='';
 
}

// 2й способ
document.write('<br><p><b><i>2-й способ ( DOM ):</i></b></p>');

for (let i = 0; i < 7; i++) {

  dayWeek = document.createElement("p");
 
  if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    dayWeek.style.fontWeight = 'bold';
  } 
  if (i === currentDay.getUTCDay()-1) {
    dayWeek.style.fontStyle = 'italic';
  } 
  
  dayWeek.innerHTML = week[i];
  document.body.appendChild(dayWeek);
 
}






