let container = document.getElementById("apple-watch-container")
let newClock = '<div id="each-watch_container" class="each-watch_container"><h2 class="location">Pacific time</h2><div class="apple-watch"><div class="apple-watch__screen"><div class="clock analog_clock"><div class="dials"></div><div class="face"><div class="hands"><div class="hand hours-hand"></div><div class="hand minutes-hand"></div><div class="hand seconds-hand"></div></div><div class="numbers"><span class="number twelve">12</span><span class="number three">3</span><span class="number six">6</span><span class="number nine">9</span></div><div class="digital_clock"></div><div class="day_date"><span class="day"></span><span class="date"></span></div></div></div></div></div>'
container.innerHTML = newClock

// class Watch {
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   static timeZone(a) {
//
//   let newClock = '<div id="each-watch_container" class="each-watch_container"><h2 class="location">' + this.x + '</h2><div class="apple-watch"><div class="apple-watch__screen"><div class="clock analog_clock"><div class="dials"></div><div class="face"><div class="hands"><div class="hand hours-hand"></div><div class="hand minutes-hand"></div><div class="hand seconds-hand"></div></div><div class="numbers"><span class="number twelve">12</span><span class="number three">3</span><span class="number six">6</span><span class="number nine">9</span></div><div class="digital_clock"></div><div class="day_date"><span class="day"></span><span class="date"></span></div></div></div></div></div>'
//
//   let m
//
//   return newClock;
//   }
//
// }
//
// var pacific = new Watch("Pacific time", 0);
//


function dialCreation(){
let getDials = document.querySelector(".dials")
  for(var i = 0; i < 15; i++){
    let createDial = document.createElement('DIV')
    createDial.className = 'dial dial_' + i;
    getDials.appendChild(createDial)
  }
  let cloneDials = getDials.cloneNode(true)
  cloneDials.style.transform = "rotate(90deg)";
  let printClone = document.querySelector(".analog_clock").appendChild(cloneDials)
}
dialCreation();



function clock(a) {
//Get the time
let secondsHand = document.querySelector(".seconds-hand")
let minutesHand = document.querySelector(".minutes-hand")
let hoursHand = document.querySelector(".hours-hand")
let digitalClock = document.querySelector(".digital_clock")
let dateFeature = document.querySelector(".day_date")

 const now = new Date()
 let seconds = now.getSeconds();
 let minutes = now.getMinutes();
 let hours = now.getHours() + a;

 //Analog Clock
 const secondsDegrees = (seconds / 60) * 360
 const minutesDegrees = (minutes / 60) * 360
 const hoursDegrees = (hours / 12 * 360) + minutes * .5

 secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
 minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
 hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

 //Digital Clock
 digitalClock.innerHTML = round(hours) + ":" + round(minutes) + ":" + round(seconds)

 //Day & Date
dateFeature.children[0].innerHTML = getTheDay()
dateFeature.children[1].innerHTML = getTheDate()

setInterval(clock, 1000)
}
clock();


function round(n){return n > 9 ? "" + n: "0" + n;}

function getTheDay(){return Date().substring(0,3).toUpperCase()}

function getTheDate(){return Date().substring(8,10);}
