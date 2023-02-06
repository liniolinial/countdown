//Ostern 2023
let countDownDate = new Date("April 09, 2023 00:00:00").getTime();
//test raffle release
// let countDownDate = new Date("Feb 06, 2023 16:54:00").getTime();
const afterCountDown = document.getElementById('countdown');
const froheOstern = document.getElementById("release");
const easterEgg = document.getElementById("background");

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
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    //after countdown,
    if(interval < 0){
        clearInterval(x);
        afterCountDown.style.display = "none";
        document.getElementById("release").innerHTML = "Frohe Ostern!";
        froheOstern.style.padding = "30px 0"
        froheOstern.style.display = "block"
        froheOstern.style.fontSize = "2rem"
        froheOstern.style.color = "yellow"
        froheOstern.style.textShadow = "-1px 1px 0 crimson, -2px 2px 0 crimson, -3px 3px 0 crimson";
        easterEgg.style.backgroundImage ="url(images/broken_egg1.png)";
        easterEgg.style.backgroundRepeat = "no-repeat";
        easterEgg.style.backgroundPositionX = "center";
        easterEgg.style.backgroundSize = "21%";
        document.querySelector("h1").style.color ="white";
        document.querySelector("body").style.backgroundColor ="black";
    }
});
