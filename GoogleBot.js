// ==UserScript==
// @name         Google_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot!
// @author       SergeyChizhikov
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress",
                "Вывод произвольных типов записей и полей в WordPress", "как использовать DevTools браузера"];
let btnK = document.getElementsByName("btnK")[0];
let googleInput = document.getElementsByName("q")[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
//googleInput.value = keyword;

if (btnK !== undefined) {
    let i = 0;
    let timerId = setInterval(()=>{
        googleInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
        }
    },500);
    btnK.click();
}else{
    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes('napli.ru')){
            let link = links[i];
            link.click();
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
}
function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}
