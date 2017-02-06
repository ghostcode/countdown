/*
* @Author: zhuxy
* @Date:   2017-02-06 20:16:56
* @Last Modified by:   zhuxy
* @Last Modified time: 2017-02-06 21:53:09
*/

'use strict';

function getElement(selector){
    return document.querySelector(selector);
}

let $Yday = getElement('.j-year-day');
let $Yhour = getElement('.j-year-hour');
let $Dh = getElement('.j-day-h');
let $Dm = getElement('.j-day-m');
let $Ds = getElement('.j-day-s');

let date = new Date()
let year = date.getFullYear();

let dayS = 24*60*60;

let dateS = date.getTime();
let dateEndS = new Date(year,11,31,23,59,59).getTime();

(function countDown(){
    // console.log(Number.parseInt( (dateEndS - dateS) / 1000 ));

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

// ===============================


