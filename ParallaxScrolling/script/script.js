let star = document.getElementById('stars')
let moon = document.getElementById('moon')
let montain_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let montain_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    star.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    montain_behind.style.top = value * 0.35 + 'px';
    montain_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.35 + 'px';
})