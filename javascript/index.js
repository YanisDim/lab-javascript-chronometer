const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes()
  printSeconds()
  
   
  
}

function printMinutes() {
  // ... your code goes here
 let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
 minUni.innerText = minutes[1]
 minDec.innerText = minutes[0]
  
}
console.log(printMinutes())

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerText = 'STOP'
  btnLeft.classclassName = 'btn stop'
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerTex = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = 'RESET'
  btnRight.className = ('btn reset') 

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText === 'START'){
    chronometer.startClick(printTime)
    setStopBtn()
    setResetBtn()
    setSplitBtn()
  } else{
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.innerText === 'SPLIT'){
    printSplit()
  }else{
    chronometer.resetClick()
    printMinutes()
    printSeconds()
    clearSplits()
  }
});

