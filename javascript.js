/*text scroll thingie*/
let stayHome = document.getElementById("stayHome")
let beSafe = document.getElementById("beSafe")


window.addEventListener('scroll',function(){
    var value = window.scrollY;

    beSafe.style.bottom = value / 5 +'px';
    stayHome.style.bottom = value * 100 +'px';
})



const accordion = document.getElementsByClassName('contentBx');

for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')})
    }