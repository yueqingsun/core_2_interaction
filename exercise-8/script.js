

function timeDiv(){
    let hourdiv = document.getElementById("hour");
    let mindiv = document.getElementById("min");
    let secdiv = document.getElementById("sec");
    let milisecdiv = document.getElementById("milisec");
    let time = document.getElementById("time");
    let now = new Date();
    let currentHour = now.getHours();
    let currentMin = now.getMinutes();
    let currentSec = now.getSeconds();
    let currentMiliSec = now.getMilliseconds();

    
    let hourToSize = map(currentHour, 0, 23, 0, 100);
    let hourToHue = map(currentHour, 0, 23, 0, 360);
    let minToSize = map(currentMin, 0, 59, 0, 100);
    let minToHue = map(currentMin, 0, 59, 0, 360);
    let secToSize = map(currentSec, 0, 59, 0, 100);
    let secToHue = map(currentSec, 0, 59, 0, 360);
    let milisecToSize = map(currentMiliSec, 0, 999, 0, 100);
    let milisecToHue = map(currentMiliSec, 0, 999, 0, 360);

    hourdiv.style.width = hourToSize + "%"
    mindiv.style.width = minToSize + "%"
    secdiv.style.width = secToSize + "%"
    milisecdiv.style.width = milisecToSize + "%"
    hourdiv.style.backgroundColor = "hsl(" + hourToHue + ", 100%, 80%)"
    mindiv.style.backgroundColor = "hsl(" + minToHue + ", 100%, 80%)"
    secdiv.style.backgroundColor = "hsl(" + secToHue + ", 100%, 80%)"
    milisecdiv.style.backgroundColor = "hsl(" + milisecToHue + ", 100%, 80%)"

    time.style.color = "hsl(" + hourToHue + ", 100%, 80%)"
    time.innerHTML=currentHour+":"+currentMin+":"+currentSec+":"+currentMiliSec

}
    setInterval(timeDiv, 1);

function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
  }
