/*
* @Author: zhuxy
* @Date:   2017-02-06 20:16:56
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-02-19 12:54:36
*/

'use strict';

let Utils = {
    getElement(selector){
        return document.querySelector(selector);
    },
    timePad(time){
        return time < 10 ? '0' + time : time;
    }
}

let $Yday = Utils.getElement('.j-year-day');
let $Yhour = Utils.getElement('.j-year-hour');
let $Dh = Utils.getElement('.j-day-h');
let $Dm = Utils.getElement('.j-day-m');
let $Ds = Utils.getElement('.j-day-s');
let $CurrentTime = Utils.getElement('.j-time');

let date = new Date()
let year = date.getFullYear();

let dayS = 24*60*60;

let dateS = date.getTime();
let dateEndS = new Date(year,11,31,23,59,59).getTime();

// (function countDown(){
//     let leftS = Number.parseInt( (dateEndS - dateS) / 1000 );
//     let leftM = Number.parseInt( leftS / 60 );
//     let leftH = Number.parseInt( leftM / 60 );
//     let leftD = Number.parseInt( leftH / 24 );

//     $Yday.innerText = leftD;
//     $Yhour.innerText = leftS;

//     // $Dh.innerText = 
//     // $Dm.innerText = 
//     // $Ds.innerText = 

//     dateS += 1000;

//     setTimeout(countDown,1000);
// })();

// (function countDownCurrentTime(){
//     let nowTime = new Date();
//     let h = nowTime.getHours();
//     let m = nowTime.getMinutes();
//     let s = nowTime.getSeconds();

//     h = Utils.timePad(h);
//     m = Utils.timePad(m);
//     s = Utils.timePad(s);

//     let nowTimeStr = `${h}:${m}:${s}`;

//     $CurrentTime.textContent = nowTimeStr;

//     setTimeout(countDownCurrentTime,1000);
// }())

// ===============================

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

let weeks = ['日','一','二','三','四','五','六'];
let dayStr = '';

for(let month = 0; month <=11; month++){
    // 每个月的第一天
    let firstDay = new Date(year,month,1); 
    let dayInMonth = daysInMonth(month,year);
    // 每个月的最后一天
    let lastDay = new Date(year,month,dayInMonth);

    let weekday = firstDay.getDay(); // 星期几 0-6
    let lastDayWeekDay = lastDay.getDay(); // 当月的最后一天星期几 0-6
    let date = 1; // 第一天，计数用

    dayStr += '<div class="month">';

    for(let w = 0; w < weeks.length; w++){
        dayStr += '<div class="item">' + weeks[w] + '</div>';
    }

    dayStr += '<br/>';

    // 补齐前面的空格
    for(let i = 0; i < weekday; i++){
        dayStr += '<div class="item"></div>';
    }

    for(;date <= dayInMonth;date++){
        dayStr += '<div class="item">' + date + '</div>';
        weekday++

        if(weekday%7 == 0){
            weekday = 0;
            dayStr += '<br/>';
        }
    }

    // 补齐后面的空格
    for(let j = 0; j < (7 - lastDayWeekDay - 1); j++){
        dayStr += '<div class="item"></div>';
    }

    dayStr += '<br/></div>';
}

let $mondOne = document.querySelector('.mode-one');

$mondOne.innerHTML = dayStr;




































