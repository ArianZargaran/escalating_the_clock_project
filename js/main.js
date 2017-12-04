
let Watch = function Watch(gmt, timezone) {
  this.gmt = gmt;
  this.timezone = timezone;
}

Watch.prototype.getTime = function(){
  let mainContainer = document.getElementById('apple-watch-container')
  let newClock = document.createElement("DIV")
  let thisClass = newClock.className = this.timezone.split(' ').join('') + "-watch" ;
  newClock.innerHTML = '<h2 class="location">' + this.timezone + '</h2><div class="apple-watch"><div class="apple-watch__screen"><div class="clock analog_clock_' + thisClass +'"><div class="dials dials_' + thisClass +'"></div><div class="face"><div class="hands ' + thisClass + '-hands"><div class="hand hours-hand hours_' + thisClass + '"></div><div class="hand minutes-hand minutes_' + thisClass + '"></div><div class="hand seconds-hand seconds_' + thisClass + '"></div></div><div class="numbers"><span class="number twelve">12</span><span class="number three">3</span><span class="number six">6</span><span class="number nine">9</span></div><div class="digital_clock digital_' + thisClass + '"></div><div class="day_date day_date_'+ thisClass + '"><span class="day"></span><span class="date"></span></div></div></div></div>'
  mainContainer.appendChild(newClock) 

  let getDials = document.querySelector(".dials_" + thisClass)
  
  for(var i = 0; i < 15; i++){
    let createDial = document.createElement('DIV')
    createDial.className = 'dial dial_' + i + " " + thisClass;
    getDials.appendChild(createDial)
  }
  
  let cloneDials = getDials.cloneNode(true)
  cloneDials.style.transform = "rotate(90deg)";
  let printClone = document.querySelector(".analog_clock_" + thisClass).appendChild(cloneDials)

  let myGmt = this.gmt

  var clock = function() {
    //Get the time
    let secondsHand = document.querySelector(".seconds_" + thisClass)
    let minutesHand = document.querySelector(".minutes_" + thisClass)
    let hoursHand = document.querySelector(".hours_" + thisClass)
    let digitalClock = document.querySelector(".digital_" + thisClass)
    let dateFeature = document.querySelector(".day_date_" + thisClass)
    
     const now = new Date()
     let seconds = now.getSeconds();
     let minutes = now.getMinutes();
     let hours = now.getHours() + myGmt;

     if(hours < 0) { hours += 12 }
     else if(hours > 24) {hours -= 12 }

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
clock()


}






var santaClara = new Watch(-8, "Santa Clara")
santaClara.getTime()

var madrid = new Watch(1, "Madrid")
madrid.getTime()

var estambul = new Watch(3, "Estambul")
estambul.getTime()

var hawaii = new Watch(8, "Hawaii")
hawaii.getTime()

var berlin = new Watch(-10, "Berlín")
berlin.getTime()

var dublin = new Watch(0, "Dublín")
dublin.getTime()

var paris = new Watch(-5, "París")
paris.getTime()

var sanLorenzoDeCalatrava = new Watch(-8, "San Lorenzo")
sanLorenzoDeCalatrava.getTime()






function round(n){return n > 9 ? "" + n: "0" + n;}

function getTheDay(){return Date().substring(0,3).toUpperCase()}

function getTheDate(){return Date().substring(8,10);}


//REFERENCE//

// /////////
// let nextId = 0;
//
//   this.myEl = $(`<div class='container-${nextId}'>`);
//
//   $('body').append(this.myEl);
//
//   if (timezone === 'SF') {myThis.time.setTime(myThis.time.getTime());}
//   if (timezone === 'Madrid') {myThis.time.setTime(myThis.time.getTime() - (1000 * 60 * 60 * 15));}
//
//
//   setInterval(this.addSecond.bind(this), 1000);
//
//   nextId += 1;
// };
//
// Watch.prototype.addSecond = function() {
//   this.time.setTime(this.time.getTime() + 1000);
//   var html = this.render();
//   this.myEl.html(html);
// };
//
// Watch.prototype.render = function() {
//   let m = this.time.getMinutes().toString().padStart(2, '0');
//   let h = this.time.getHours().toString().padStart(2, '0');
//   let s = this.time.getSeconds().toString().padStart(2, '0');
//   let name = this.name;
//
//   return `<div>${name}</div>\t\t\t${h}:${m}:${s}`;
// };
//
// new Watch('Madrid', 'Madrid');
// new Watch('Argel', 'Madrid');
// new Watch('San Francisco', 'SF');
/////////////