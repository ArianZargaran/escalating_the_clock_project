let Watch = function Watch(gmt, timezone) {
  this.gmt = gmt;
  this.timezone = timezone;
  this.mainContainer = document.getElementById('apple-watch-container')
  this.dials = document.querySelector(".dials")
}




Watch.prototype.initialize = function(){
  let watchesContainer = this.mainContainer
  watchesContainer.innerHTML += '<div id="watch-wrapper"><h2 class="location">' + this.timezone + '</h2><div class="apple-watch"><div class="apple-watch__screen"><div class="clock analog_clock"><div class="dials"></div><div class="face"><div class="hands"><div class="hand hours-hand hours"></div><div class="hand minutes-hand"></div><div class="hand seconds-hand"></div></div><div class="numbers"><span class="number twelve">12</span><span class="number three">3</span><span class="number six">6</span><span class="number nine">9</span></div><div class="digital_clock"></div><div class="day_date"><span class="day"></span><span class="date"></span></div></div></div></div></div>'

  
//this.paintDials()

  //   let myGmt = this.gmt
//   let secondsHand = document.querySelector(".seconds_" + thisClass)
//   let minutesHand = document.querySelector(".minutes_" + thisClass)
//   let hoursHand = document.querySelector(".hours_" + thisClass)
//   let digitalClock = document.querySelector(".digital_" + thisClass)
//   let dateFeature = document.querySelector(".day_date_" + thisClass)

//   var clock = function() {
//      const now = new Date()
//      let seconds = now.getSeconds();
//      let minutes = now.getMinutes();
//      let hours = now.getHours() + myGmt;

//      if(hours < 0) { hours += 12 }
//      else if(hours > 24) {hours -= 12 }

//      //Analog Clock
//      const secondsDegrees = (seconds / 60) * 360
//      const minutesDegrees = (minutes / 60) * 360
//      const hoursDegrees = (hours / 12 * 360) + minutes * .5
    
//      secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
//      minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
//      hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
//      //Digital Clock
//      digitalClock.innerHTML = round(hours) + ":" + round(minutes) + ":" + round(seconds)
    
//      //Day & Date
//     dateFeature.children[0].innerHTML = getTheDay()
//     dateFeature.children[1].innerHTML = getTheDate()
    
//     setInterval(clock, 1000)
//     }
// clock()
}

// Watch.prototype.update = function () {
  
// }


// function round(n){return n > 9 ? "" + n: "0" + n;}

// function getTheDay(){return Date().substring(0,3).toUpperCase()}

// function getTheDate(){return Date().substring(8,10);}

Watch.prototype.paintDials = (function(){
  for(var i = 0; i < 15; i++){
    let createDial = document.createElement('DIV')
    createDial.className = 'dial' + i;
    this.dials.appendChild(createDial) 
    let cloneDials = pointDials.cloneNode(true)
    cloneDials.style.transform = "rotate(90deg)";
    let printClone = document.querySelector(".analog_clock_").appendChild(cloneDials)
  }
})();




var santaClara = new Watch(-8, "Santa Clara")
santaClara.initialize()

var madrid = new Watch(1, "Madrid")
madrid.initialize()

var estambul = new Watch(3, "Estambul")
estambul.initialize()

// var hawaii = new Watch(8, "Hawaii")
// hawaii.initialize()

// var berlin = new Watch(-10, "Berlín")
// berlin.initialize()

// var dublin = new Watch(0, "Dublín")
// dublin.initialize()

// var paris = new Watch(-5, "París")
// paris.initialize()

// var sanLorenzoDeCalatrava = new Watch(-8, "San Lorenzo")
// sanLorenzoDeCalatrava.initialize()