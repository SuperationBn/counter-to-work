const showTime = document.getElementById('showTime');
const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
const btnStop = document.getElementById('stop');

let startTime = 0;
let endTime = 0;
let pause = true;
let idSetIntervalBox;
let horas = 0;
let minutos = 0;
let segundos = 0;

function formateTime(time) {
  let newFormate = time.toString();
  return (newFormate.length < 2) ? `0${newFormate}` : newFormate
}

function updateTime() {
  endTime = Date.now() - startTime;

  horas = Math.floor((endTime / (1000 * 60 * 60)) % 60);
  minutos = Math.floor((endTime / (1000 * 60)) % 60);
  segundos = Math.floor((endTime / 1000) % 60);

  //---------------------------------------------

  let newHoras = formateTime(horas);
  let newMinutos = formateTime(minutos);
  let newSegundos = formateTime(segundos);

  let boxTime = `${newHoras} : ${newMinutos} : ${newSegundos}`;

  return showTime.innerHTML = boxTime;
}

btnStart.addEventListener('click', () => {
  if (pause) {
    pause = false;
    startTime = Date.now() - endTime;
    idSetIntervalBox = setInterval(updateTime, 1000);
  }
});
//----------------------------------------------
btnStop.addEventListener('click', () => {
  if (!pause) {
    pause = true;
    endTime = Date.now() - startTime;
    clearInterval(idSetIntervalBox);
  }
})
//----------------------------------------------
btnReset.addEventListener('click', () => {
  startTime = 0;
  endTime = 0;
  pause = true;
  horas = 0;
  minutos = 0;
  segundos = 0;
  clearInterval(idSetIntervalBox);
  showTime.innerHTML = '00 : 00 : 00'
})