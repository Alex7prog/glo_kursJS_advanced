'use strict';

const 
    div = document.querySelector('.wrapper'),
    colorInfo = document.querySelector('#color'),
    btnNewColor = document.querySelector('#change');

const dec2hex = function(d) {
        if (d > 15) {
            return d.toString(16)
        } else {
            return "0"+d.toString(16)
        }
    },
    rgb = function(r,g,b) {
        return "#"+dec2hex(r)+dec2hex(g)+dec2hex(b)
    },
    
    bgChangeColor = function() {
    let r = Math.floor(Math.random() * Math.floor(255)) + 1,
        g = Math.floor(Math.random() * Math.floor(255)) + 1,
        b = Math.floor(Math.random() * Math.floor(255)) + 1,
        currentColor = rgb(r, g, b);
        console.log('currentColor: ', currentColor);
  
    document.body.style.backgroundColor = currentColor;
    colorInfo.textContent = currentColor; 
    };

div.style.cssText = 'position: absolute; top: 50%; left: 50%';
btnNewColor.style.cssText = 'width: 100%';

btnNewColor.addEventListener('click', bgChangeColor);
