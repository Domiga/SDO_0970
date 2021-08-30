// ==UserScript==
// @name         Google_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot!
// @author       SergeyChizhikov
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let keywords = ["10 самых популярных шрифтов от Google", "сервис от Mario Ranftl",
                "хотим ограничить количество редакций", "как использовать DevTools браузера"];
let btnK = document.getElementsByName("btnK")[0];
let googleInput = document.getElementsByName("q")[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
googleInput.value = keyword;

if (btnK !== undefined) {
    let i = 0;
    let timerId = setInterval(()=>{
        googleInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            btnK.click();
        }
    },500);

}else{
    let nextGooglePage = true;
    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes('napli.ru')){
            let link = links[i];
            let nextGooglePage = false;
            setTimeout(()=>{link.click();},getRandom(1500,4500));
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
    if (document.querySelector('.YyVfkd').innerText == "5") {
    let nextGooglePage = false;
    location.href = "https://www.google.com";
    }
    if (nextGooglePage = true) {
    setTimeout(()=>{pnnext.click();},getRandom(2000,6000));

}
}
function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}
