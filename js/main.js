const yearSite = document.querySelector('#year')
const daysSite = document.querySelector('#days')
const hourSite = document.querySelector('#hours')
const minSite = document.querySelector('#minutes')
const secondsSite = document.querySelector('#seconds')
const preloader = document.querySelector('#preloader')
const countdown = document.querySelector('#countdown')



const correntDate = new Date().getFullYear();
const nextYear = new Date(`01.01 ${correntDate + 1} 00:00:00`);

yearSite.textContent = correntDate+1

setInterval(function(){
    const fullNowTime = new Date();
    const days = Math.floor((nextYear-fullNowTime)/1000/60/60/24);
    const hour = Math.floor((nextYear-fullNowTime)/1000/60/60) % 24;
    const min = Math.floor((nextYear-fullNowTime)/1000/60) % 60;
    const second = Math.floor((nextYear-fullNowTime)/1000) % 60;

    daysSite.textContent = days
    hourSite.textContent = hour < 10 ? '0'+hour : hour;
    minSite.textContent = min < 10 ? '0'+min : min;
    secondsSite.textContent = second < 10 ? '0'+second : second;
}, 1000)

setTimeout(function(){
    countdown.classList.remove('none')
    preloader.remove()

}, 1000)