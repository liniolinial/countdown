//Ostern 2023
// let countDownDate = new Date("April 09, 2023 00:00:00").getTime();
//test raffle release
let countDownDate = new Date("Feb 08, 2023 13:22:40").getTime();
const afterCountDown = document.querySelector('#countdown');
const froheOstern = document.querySelector("#release");
const easterEgg = document.querySelector("#background");
const firework = document.querySelector("#fireworkframe");

//update the countdown every 1 sec
let x = setInterval(function(){

    //get today's date and time
    let today = new Date().getTime();

    //distance between today and the count down date
    let interval = countDownDate - today;

    //Time calculations for days, hours, minutes and seconds
    let days = Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((interval % (1000 * 60)) / (1000));

    //Output the result in an element with each num x class
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".sec").innerHTML = sec;

    //after countdown,
    console.log(interval)
    if(interval <= 1000){
        clearInterval(x);
        froheOstern.innerHTML = "Frohe Ostern!";
        document.body.classList.add("released");
    }
}); //für performant besser delay zu geben, aber gibt es bei neu Starten delay auchS

//Feedback:
// getElementById sollte immer mit document geschrieben