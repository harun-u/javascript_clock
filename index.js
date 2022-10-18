let myClock = document.querySelector('#myClock');
let myName = document.querySelector('#myName');

myName.innerHTML = prompt('İsminizi Girin: ');
let date = new Date();
let minutes = date.getMinutes();
let hours = date.getHours();
let dayOfWeek = date.getDay();

setInterval(function saat() {
  let date = new Date();
  let seconds = date.getSeconds();

  switch (dayOfWeek) {
    case 0:
      return (dayOfWeek = 'Pazar');
      break;
    case 1:
      return (dayOfWeek = 'Pazartesi');
      break;
    case 2:
      return (dayOfWeek = 'Salı');
      break;
    case 3:
      return (dayOfWeek = 'Çarşamba');
      break;
    case 4:
      return (dayOfWeek = 'Perşembe');
      break;
    case 5:
      return (dayOfWeek = 'Cuma');
      break;
    case 6:
      return (dayOfWeek = 'Cumartesi');
      break;
    default:
      'Yanlis Deger';
  }

  myClock.innerHTML = hours + ':' + minutes + ':' + seconds + '  ' + dayOfWeek;
}, 1000);
