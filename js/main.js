"use strict";

// ⊗jsPrStLC Линейный календарь

let yearValue = document.querySelector('.calendar .calendar__inp-year'); // value год
let monthValue = document.querySelector('.calendar .calendar__inp-month'); // value месяц
let dayValue = document.querySelector('.calendar .calendar__inp-day'); // value день
let weekValue = document.querySelector('.calendar .calendar__inp-week'); // value id недели первого числа

let listBox = document.querySelector('.calendar .calendar__list-box'); // блок ul
let tagSpanWeeks = document.querySelectorAll('.calendar .calendar__item-week'); // массив с именами недель
let prev = document.querySelector('.calendar .calendar__previous'); // кнопка (предыдущий)
let next = document.querySelector('.calendar .calendar__next'); // кнопка (следующий)
let tagMonth = document.querySelector('.calendar .calendar__month'); // названия месяцев
let tagYear = tagMonth.firstElementChild; // значение (года)

let arrMonth = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

let now = new Date();
let day = now.getDate();

yearValue.value = now.getFullYear(); 
monthValue.value = now.getMonth(); 
dayValue.value = now.getDate(); 
weekValue.value = new Date(now.getFullYear(), now.getMonth(), 1).getDay();

tagMonth.firstChild.textContent = `${arrMonth[monthValue.value]} `;
tagYear.textContent = yearValue.value; 

setDays(yearValue.value, monthValue.value, weekValue.value, listBox);

function setDays(year, month, week, box) {
   
   let ul = document.createElement('ul');
   ul.classList.add('calendar__list');
   box.appendChild(ul);
   
   let list = document.querySelector('.calendar .calendar__list');
   
   for (let i = 0; i < 42; i++) {
      let date = new Date(year, month, 1 - (Number(week) - 1) + i)

      let li = document.createElement('li');
      li.classList.add('calendar__list-item');
      li.textContent = date.getDate();
      list.appendChild(li);

      if (date.getMonth() != monthValue.value) {
         li.classList.add('calendar__list-item--grey');
      }

      if (now.getFullYear() == date.getFullYear() && now.getMonth() == date.getMonth() && now.getDate() == date.getDate()) {
         li.classList.add('calendar__list-item--active');
      }
   }
}

prev.addEventListener('click', function() {
   let datePrev = new Date(yearValue.value, monthValue.value - 1, dayValue.value);

   monthValue.value = datePrev.getMonth();
   yearValue.value = datePrev.getFullYear();
   weekValue.value = new Date(datePrev.getFullYear(), datePrev.getMonth(), 1).getDay();

   tagMonth.firstChild.textContent = `${arrMonth[monthValue.value]} `; 
   tagYear.textContent = yearValue.value; 
   
   listBox.firstElementChild.remove();

   setDays(yearValue.value, monthValue.value, weekValue.value, listBox);
});

next.addEventListener('click', function() {
   let date = new Date(yearValue.value, Number(monthValue.value) + 1, dayValue.value);

   monthValue.value = date.getMonth();
   yearValue.value = date.getFullYear();
   weekValue.value = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

   tagMonth.firstChild.textContent = `${arrMonth[monthValue.value]} `; 
   tagYear.textContent = yearValue.value; 

   listBox.firstElementChild.remove();

   setDays(yearValue.value, monthValue.value, weekValue.value, listBox);
});












