/*
* @Author: zhuxy
* @Date:   2017-02-06 20:16:56
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-02-08 10:11:40
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

(function countDown(){
    let leftS = Number.parseInt( (dateEndS - dateS) / 1000 );
    let leftM = Number.parseInt( leftS / 60 );
    let leftH = Number.parseInt( leftM / 60 );
    let leftD = Number.parseInt( leftH / 24 );

    $Yday.innerText = leftD;
    $Yhour.innerText = leftS;

    // $Dh.innerText = 
    // $Dm.innerText = 
    // $Ds.innerText = 

    dateS += 1000;

    setTimeout(countDown,1000);
})();

(function countDownCurrentTime(){
    let nowTime = new Date();
    let h = nowTime.getHours();
    let m = nowTime.getMinutes();
    let s = nowTime.getSeconds();

    h = Utils.timePad(h);
    m = Utils.timePad(m);
    s = Utils.timePad(s);

    let nowTimeStr = `${h}:${m}:${s}`;

    $CurrentTime.textContent = nowTimeStr;

    setTimeout(countDownCurrentTime,1000);
}())

// ===============================


