let Watch = function Watch(gmt, timezone, site) {
  this.gmt = gmt;
  this.timezone = timezone;
  this.mainContainerEl = document.getElementById(site);
  
  this.watchWrapperEl = document.createElement('DIV');
  this.watchWrapperEl.classList.add('az-watch_wrapper');
  
  this.dialsEl = document.createElement('DIV');
  this.dialsEl.classList.add('az-watch_dials');
  
  const locationEl = document.createElement('H2');
  locationEl.classList.add('az-watch_location');
  locationEl.innerHTML = this.timezone;
  
  this.watchWrapperEl.appendChild(locationEl);
  
  this.watchWrapperEl.innerHTML += 
    '<div class="az-watch">' +
      '<div class="az-watch_screen">' + 
        '<div class="az-watch_analog">' +
          '<div class="az-watch_face">' +
            '<div class="az-watch_hands">' +
              '<div class="az-watch_hand az-watch_hours-hand"></div>' +
              '<div class="az-watch_hand az-watch_minutes-hand"></div>' +
              '<div class="az-watch_hand az-watch_seconds-hand"></div>' +
            '</div>' +
            '<div class="az-watch_numbers">' +
              '<span class="az-watch_number az-watch_number-twelve">12</span>' +
              '<span class="az-watch_number az-watch_number-three">3</span>' +
              '<span class="az-watch_number az-watch_number-six">6</span>' +
              '<span class="az-watch_number az-watch_number-nine">9</span>' +
            '</div>' +
            '<div class="az-watch_digital_clock"></div>' +
            '<div class="az-watch_calendar">' +
              '<span class="az-watch_calendar_day"></span>' +
              '<span class="az-watch_calendar_date"></span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' + 
    '</div>';
  
  const analogClockEl = this.watchWrapperEl.querySelector('.az-watch_analog');
  analogClockEl.appendChild(this.dialsEl);
  analogClockEl.insertBefore(this.dialsEl, analogClockEl.firstChild);
  this.paintDials();

  this.hoursHandEl = this.watchWrapperEl.querySelector('.az-watch_hours-hand');
  this.minutesHandEl = this.watchWrapperEl.querySelector('.az-watch_minutes-hand');
  this.secondsHandEl = this.watchWrapperEl.querySelector('.az-watch_seconds-hand');
  this.digitalClockEl = this.watchWrapperEl.querySelector('.az-watch_digital_clock');
  this.calendarEl = this.watchWrapperEl.querySelector('.az-watch_calendar');
  
  this.clockEvent();
}


Watch.prototype.initialize = function(){
  this.mainContainerEl.appendChild(this.watchWrapperEl);
}

Watch.prototype.paintDials = function(){
  for(var i = 0; i < 30; i++){
    this.dialEl = document.createElement('DIV')
    this.dialEl.className = 'az-watch_dial az-watch_dial-' + i;
    this.dialsEl.appendChild(this.dialEl)
  }
};

Watch.prototype.clockEvent = function(){
  const now = new Date()
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours() + this.gmt;
  if(hours > 24) {hours -= 12} else if (hours < 0) {hours += 12}

  let secondsDegrees = (seconds / 60) * 360
  let minutesDegrees = (minutes / 60) * 360
  let hoursDegrees = (hours / 12 * 360) + minutes * .5

  this.secondsHandEl.style.transform = 'rotate(' + secondsDegrees + 'deg)';
  this.minutesHandEl.style.transform = 'rotate(' + minutesDegrees + 'deg)';
  this.hoursHandEl.style.transform = 'rotate(' + hoursDegrees + 'deg)';

  this.digitalClockEl.innerHTML = this.round(hours) + ":" + this.round(minutes) + ":" + this.round(seconds)

  this.calendarEl.children[0].innerHTML = this.getTheDay()
  this.calendarEl.children[1].innerHTML = this.getTheDate()

  setInterval(this.clockEvent.bind(this), 1000);
}

Watch.prototype.round = function(n){return n > 9 ? "" + n: "0" + n;}

Watch.prototype.getTheDay = function(){return Date().substring(0,3).toUpperCase()}

Watch.prototype.getTheDate = function(){return Date().substring(8,10);}



const m = new Watch(1, 'Madrid', "az-watches_container");
m.initialize();


var santaClara = new Watch(-8, "Santa Clara", "az-watches_container")
santaClara.initialize()

var estambul = new Watch(3, "Estambul", "az-watches_container")
estambul.initialize()

var hawaii = new Watch(8, "Hawaii", "az-watches_container")
hawaii.initialize()

var berlin = new Watch(-10, "Berlín", "az-watches_container")
berlin.initialize()

var dublin = new Watch(0, "Dublín", "az-watches_container")
dublin.initialize()

var paris = new Watch(-5, "París", "az-watches_container")
paris.initialize()

var sanLorenzoDeCalatrava = new Watch(-8, "San Lorenzo", "az-watches_container")
sanLorenzoDeCalatrava.initialize()