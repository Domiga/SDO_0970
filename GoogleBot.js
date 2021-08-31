// ==UserScript==
// @name         Google_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot!
// @author       SergeyChizhikov
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @match        https://psyholog.me/*
// @match        https://motoreforma.com/*
// @grant        none
// ==/UserScript==


let sites = {
    "napli.ru":["10 самых популярных шрифтов от Google", "сервис от Mario Ranftl",
                "хотим ограничить количество редакций", "как использовать DevTools браузера"],
    "psyholog.me":["центр здоровых отношений", "Услуги центра здоровых отношений", "Чекалина Елена психолог"],
    "motoreforma.com":["мотореформа", "прошивки для CAN-AM", "тюнинг Maverikc X3", "тюнинг для квадроциклов CAN-AM", "вариатор CV-Tech для Can-Am"]
}

let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keywords = sites[site];
let btnK = document.getElementsByName("btnK")[0];
let googleInput = document.getElementsByName("q")[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
//googleInput.value = keyword;
if (btnK !== undefined) {
    document.cookie = `site = ${site}`;
}else if(location.hostname == "www.google.com"){
    site = getCookie("site");
}else {
    site = location.hostname;
}

if (btnK !== undefined) {
    document.cookie = `site = ${site}`;
    let i = 0;
    let timerId = setInterval(()=>{
        googleInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            btnK.click();
        }
    },500);
}else if(location.hostname == site){
    //console.log("Мы на napli.ru");
    setInterval(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101) >= 80) {
            location.href = "https://www.google.com";
        }
        if (links[index].href.indexOf(site) !== -1)
            links[index].click();}, getRandom(1000, 5000));
}else{
    let nextGooglePage = true;
    for (let i=0; i<links.length; i++) {
        if (links[i].href.includes(site)){
            let link = links[i];
            let nextGooglePage = false;
            setTimeout(()=>{link.click();},getRandom(3000,7000));
            console.log("Нашел строку" + links[i]);
            break;
        }
    }
    if (document.querySelector('.YyVfkd').innerText == "5") {
        let nextGooglePage = false;
        location.href = "https://www.google.com";
    }
    if (nextGooglePage) {
        setTimeout(()=>{pnnext.click();},getRandom(2000,6000));

    }
}

function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min)+min)
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
