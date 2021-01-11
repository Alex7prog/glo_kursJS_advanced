//******* Lesson 18 advanced #2 **************************************


'use strict';

//создаем элемент canvas
const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
canvas.style.border = 'solid 1px darkgrey';

const ctx = canvas.getContext('2d');
document.body.append(canvas);

let IdAnim = 0,
	IdRev = 0;

let tick = 0;
//анимация
const animation = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = '#4682B4';
	ctx.fillRect(tick, tick, 50, 50);
	tick++;
	if (tick < 350) {
		IdAnim = requestAnimationFrame(animation);
	} else {
		IdAnim = 0;
		reverse();
	}
};
//анимация в обратном направлении
const reverse = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = '4682B4';
	ctx.fillRect(tick, tick, 50, 50);
	tick--;
	if (tick > 0) {
		IdRev = requestAnimationFrame(reverse);
	} else {
		IdRev = 0;
		animation();
	}
};

//создаем кнопку старт/стоп анимация
const btnStartStopAnimation  = document.createElement('button');

btnStartStopAnimation.textContent = 'Start animation';
btnStartStopAnimation.style.color = '#008000';
btnStartStopAnimation.style.display = 'block';
document.body.append(btnStartStopAnimation);

// клик по кнопке запускает, останавливает анимацию
btnStartStopAnimation.addEventListener('click', () => {
	if (btnStartStopAnimation.hasAttribute('start')) {
		if (IdAnim > 0) {
			cancelAnimationFrame(IdAnim);
		} else {
			cancelAnimationFrame(IdRev);
		}
		btnStartStopAnimation.toggleAttribute('start');
		btnStartStopAnimation.textContent = 'Start animation';
		btnStartStopAnimation.style.color = '#008000';
	} else {
		if (IdAnim > 0) {
			animation();
		} else {
			reverse();
		}
		btnStartStopAnimation.toggleAttribute('start');
		btnStartStopAnimation.textContent = 'Stop animation';
		btnStartStopAnimation.style.color = '#FF4500';
	}
});
