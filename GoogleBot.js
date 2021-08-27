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
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
document.getElementsByName("q")[0].value = keyword;

if (btnK !== undefined) {
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
