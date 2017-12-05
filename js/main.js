let Watch = function Watch(gmt, timezone) {
  this.gmt = gmt;
  this.timezone = timezone;
  this.mainContainerEl = document.getElementById('apple-watch-container');
  
  this.watchWrapperEl = document.createElement('DIV');
  this.watchWrapperEl.classList.add('watch-wrapper');
  
  this.dialsEl = document.createElement('DIV');
  this.dialsEl.classList.add('dials');
  
  const locationEl = document.createElement('H2');
  locationEl.classList.add('location');
  locationEl.innerHTML = this.timezone;
  
  this.watchWrapperEl.appendChild(locationEl);
  
  this.watchWrapperEl.innerHTML += 
    '<div class="apple-watch">' +
      '<div class="apple-watch__screen">' + 
        '<div class="clock analog_clock">' +
          '<div class="face">' +
            '<div class="hands">' +
              '<div class="hand hours-hand hours"></div>' +
              '<div class="hand minutes-hand"></div>' +
              '<div class="hand seconds-hand"></div>' +
            '</div>' +
            '<div class="numbers">' +
              '<span class="number twelve">12</span>' +
              '<span class="number three">3</span>' +
              '<span class="number six">6</span>' +
              '<span class="number nine">9</span>' +
            '</div>' +
            '<div class="digital_clock"></div>' +
            '<div class="day_date">' +
              '<span class="day"></span>' +
              '<span class="date"></span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' + 
    '</div>';
  
  const analogClockEl = this.watchWrapperEl.querySelector('.analog_clock');
  analogClockEl.appendChild(this.dialsEl);
  analogClockEl.insertBefore(this.dialsEl, analogClockEl.firstChild);
  this.paintDials();

  let hoursHandEl = this.watchWrapperEl.querySelector('.hours-hand');
  let minutesHandEl = this.watchWrapperEl.querySelector('.minutes-hand');
  let secondsHandEl = this.watchWrapperEl.querySelector('.seconds-hand');
  let digitalClockEl = this.watchWrapperEl.querySelector('.digital_clock');
  let dateDayEl = this.watchWrapperEl.querySelector('.day_date');
  
  this.clockEvent(hoursHandEl, minutesHandEl, secondsHandEl, digitalClockEl, dateDayEl);
}


Watch.prototype.initialize = function(){
  this.mainContainerEl.appendChild(this.watchWrapperEl);
}

Watch.prototype.paintDials = function(){
  for(var i = 0; i < 30; i++){
    this.dialEl = document.createElement('DIV')
    this.dialEl.className = 'dial dial_' + i;
    this.dialsEl.appendChild(this.dialEl)
  }
};

Watch.prototype.clockEvent = function(h, m, s, d, dd){
  const now = new Date()
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours() + this.gmt;
  if(hours > 24) {hours -= 12} else if (hours < 0) {hours += 12}

  let secondsDegrees = (seconds / 60) * 360
  let minutesDegrees = (minutes / 60) * 360
  let hoursDegrees = (hours / 12 * 360) + minutes * .5

  s.style.transform = 'rotate(' + secondsDegrees + 'deg)';
  m.style.transform = 'rotate(' + minutesDegrees + 'deg)';
  h.style.transform = 'rotate(' + hoursDegrees + 'deg)';

  d.innerHTML = this.round(hours) + ":" + this.round(minutes) + ":" + this.round(seconds)

  dd.children[0].innerHTML = this.getTheDay()
  dd.children[1].innerHTML = this.getTheDate()

  setInterval(this.clockEvent.bind(this, h, m, s, d, dd), 1000)
}

Watch.prototype.round = function(n){return n > 9 ? "" + n: "0" + n;}

Watch.prototype.getTheDay = function(){return Date().substring(0,3).toUpperCase()}

Watch.prototype.getTheDate = function(){return Date().substring(8,10);}



const m = new Watch(1, 'Madrid');
m.initialize();


var santaClara = new Watch(-8, "Santa Clara")
santaClara.initialize()

var estambul = new Watch(3, "Estambul")
estambul.initialize()

var hawaii = new Watch(8, "Hawaii")
hawaii.initialize()

var berlin = new Watch(-10, "Berlín")
berlin.initialize()

var dublin = new Watch(0, "Dublín")
dublin.initialize()

var paris = new Watch(-5, "París")
paris.initialize()

var sanLorenzoDeCalatrava = new Watch(-8, "San Lorenzo")
sanLorenzoDeCalatrava.initialize()

