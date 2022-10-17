let myName = document.querySelector('#myName');

myName.innerHTML = prompt('İsminizi Girin: ');

setInterval(function saat() {
  let myClock = document.querySelector('#myClock');

  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let dayOfWeek = date.getDay();

  myClock.innerHTML = hours + ':' + minutes + ':' + seconds + '  ' + dayOfWeek;
}, 1000);

