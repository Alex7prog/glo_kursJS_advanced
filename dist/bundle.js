(()=>{"use strict";const e=function(e,t){var n,o,r,a,c=document.querySelector("#timer-hours"),i=document.querySelector("#timer-minutes"),s=document.querySelector("#timer-seconds");function u(e){return e<10?"0"+e:e.toString()}n=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(n%60),r=Math.floor(n/60%60),(a={timeRemaining:n,hours:Math.floor(n/60/60),minutes:r,seconds:o}).timeRemaining>=0?(c.textContent=u(a.hours),i.textContent=u(a.minutes),s.textContent=u(a.seconds)):(c.textContent="00",i.textContent="00",s.textContent="00",t&&clearInterval(t))};var t,n,o,r,a,c,i,s,u,l,d,m,v,f="11 january 2021",h=null;e(f,h),h=setInterval(e,1e3,f),function(){var e=document.querySelector("menu"),t=function(e){var t=e.target.closest("a"),n=document.querySelector(t.getAttribute("href"));e.preventDefault(),n.scrollIntoView({behavior:"smooth"})};document.querySelector('[href="#service-block"]').addEventListener("click",(function(e){t(e)}));var n=function(){e.classList.toggle("active-menu")};document.addEventListener("click",(function(o){var r=o.target;o.target.closest("menu")?r.matches(".close-btn")?n():"A"===r.tagName&&(t(o),n()):e.classList.contains("active-menu")&&n(),r.closest(".menu")&&n()}))}(),i=document.querySelector(".popup"),s=document.querySelectorAll(".popup-btn"),u=document.querySelector(".popup-content"),l=0,d=-603,m=function e(){i.style.display="block",screen.width>=768?(a=requestAnimationFrame(e),l++,(c=d+20*l)<-50?u.style.transform="translateX(".concat(c,"px)"):(cancelAnimationFrame(a),l=0)):u.style.transform="translateX(".concat(-50,"px)")},v=function e(){screen.width>=768?(a=requestAnimationFrame(e),l++,(c=-50-20*l)>d?u.style.transform="translateX(".concat(c,"px)"):(cancelAnimationFrame(a),i.style.display="none",l=0)):(i.style.display="none",u.style.transform="translateX(".concat(d,"px)"))},s.forEach((function(e){e.addEventListener("click",m)})),i.addEventListener("click",(function(e){var t=e.target;t.matches(".popup-close")?v():(t=t.closest(".popup-content"))||v()})),i.addEventListener("submit",(function(e){e.preventDefault(),setTimeout(v,5e3)})),n=document.querySelector(".service-header"),o=n.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab"),n.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&o.forEach((function(e,n){e===t&&function(e){for(var t=0;t<r.length;t++)e===t?(o[t].classList.add("active"),r[t].classList.remove("d-none")):(o[t].classList.remove("active"),r[t].classList.add("d-none"))}(n)}))})),function(){for(var e,t=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-dots"),o=document.querySelector(".portfolio-content"),r=0,a=0;a<t.length;a++){var c=document.createElement("li");c.className="dot",n.appendChild(c)}var i=document.querySelectorAll(".dot");i[0].classList.add("dot-active");var s=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},l=function(){s(t,r,"portfolio-item-active"),s(i,r,"dot-active"),++r>=t.length&&(r=0),u(t,r,"portfolio-item-active"),u(i,r,"dot-active")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;e=setInterval(l,t)};o.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(s(t,r,"portfolio-item-active"),s(i,r,"dot-active"),n.matches("#arrow-right")?++r>=t.length&&(r=0):n.matches("#arrow-left")?--r<0&&(r=t.length-1):n.matches(".dot")&&i.forEach((function(e,t){e===n&&(r=t)})),u(t,r,"portfolio-item-active"),u(i,r,"dot-active"))})),o.addEventListener("mouseover",(function(t){t.target.matches(".portfolio-btn, .dot")&&clearInterval(e)})),o.addEventListener("mouseout",(function(e){e.target.matches(".portfolio-btn, .dot")&&d()})),d()}(),(t=document.getElementById("command")).addEventListener("mouseover",(function(e){var t=e.target;t.dataset.imgSrcStore=t.src,t.src=t.dataset.img})),t.addEventListener("mouseout",(function(e){var t=e.target;t.src=t.dataset.imgSrcStore})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total");t.addEventListener("input",(function(e){var t=e.target;t.matches("input")&&(t.value=t.value.replace(/[^\d]/g,""))}));var i=function(){var t=0,i=1,s=1,u=n.options[n.selectedIndex].value,l=+o.value;if(0===n.selectedIndex)return o.value="",r.value="",a.value="",void(c.textContent="");r.value&&r.value>1&&(i+=(r.value-1)/10),a.value&&a.value<5?s*=2:a.value&&a.value<10&&(s*=1.5),u&&l&&(t=Math.floor(e*u*l*+i*s));var d,m=+c.textContent,v=Math.floor(Math.abs(t-m)/10);0!==t&&(d=requestAnimationFrame((function e(){m<t?(m+=v)>t&&(m=t):m>t&&(m-=v)<0&&(m=0),c.textContent=m,m!==t?requestAnimationFrame(e):cancelAnimationFrame(d)})))};t.addEventListener("change",(function(){i()}))}(100),function(){var e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),o=document.createElement("div"),r=new Map([["user_name",/[^А-яЁё\s]+$/],["user_email",/[^A-z0-9_@\.]/],["user_phone",/[^+?\d]/],["user_message",/[^[А-яЁё\s\,\.\:\-\;\!\?]+$/]]),a=new Map([["user_name",/[А-яЁё\s]+/],["user_email",/^[^\s@]+@[^\s@]+\.[^\s@]+$/],["user_phone",/^\+?\d+$/],["user_message",/[А-яЁё\s\,\.\:\-\;\!\?]/]]),c=new Map([["user_name","Используйте ввод только кириллицы и пробелов."],["user_email","Используйте латинские буквы, @ и точку"],["user_phone","Укажите номер телефона в формате: + 12 цифр или 12 цифр."],["user_message","Используйте ввод только кириллицы, пробелов, цифр и знаков препинания."]]);o.style.cssText="font-size: 2rem; color: white;";var i=function(e){e.preventDefault();var t=e.target,n=t.querySelectorAll("input"),r=!0;if(n.forEach((function(e){if(a.get(e.name).test(e.value))e.style.border="solid green",setTimeout((function(){e.style.border=""}),3e3);else{var n=document.createElement("div");r=!1,n.style.color="orangered",t.append(n),n.textContent='Неверный формат данных. Введите "'.concat(e.placeholder,'" еще раз.'),e.style.border="solid orangered",setTimeout((function(){e.style.border=""}),3e3),setTimeout((function(){n.remove()}),3e3)}})),r){var c=new FormData(t),i={};c.forEach((function(e,t){i[t]=e})),t.appendChild(o),o.textContent="Загрузка...",function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(i).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent="Спасибо! Мы скоро с вами свяжемся!",n.forEach((function(e){return e.value=""}))})).catch((function(e){o.textContent="Что-то пошло не так",console.error(e)})),setTimeout((function(){o.remove()}),4e3)}},s=function(){var e=r.get(this.name);this.title=c.get(this.name),"user_phone"===this.name?("+"===this.value[0]?this.value=this.value.replace(e,""):this.value.length>0&&(this.value="+"+this.value.replace(e,"")),this.value.length>=13&&(this.value=this.value.substr(0,13))):this.value=this.value.replace(e,"")};e.setAttribute("novalidate",!0),e.addEventListener("submit",i),t.setAttribute("novalidate",!0),t.addEventListener("submit",i),n.setAttribute("novalidate",!0),n.addEventListener("submit",i),document.addEventListener("click",(function(e){var t=e.target;r.has(t.name)&&t.closest("form").querySelector('[name="'.concat(t.name,'"]')).addEventListener("input",s)}))}()})();