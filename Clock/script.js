window.onload = function() {
    var containerWidth = document.querySelector('.container').scrollWidth;
    var halfViewportWidth = window.innerWidth / 2;
    var initialScrollPosition = (containerWidth / 2) - halfViewportWidth;
    window.scrollTo(initialScrollPosition, 0);
  };

  let i = 0; // 初始化变量 i

  function updateTime() {
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    let currentDate = now.getDate();
    let currentHours = now.getHours();
    let currentMin = now.getMinutes();
    let currentSec = now.getSeconds();
    let currentMiliSec = now.getMilliseconds()// 修改这一行
  
    if (currentMonth <= 9) {
      currentMonth = "0" + currentMonth;
    }
    if (currentDate <= 9) {
      currentDate = "0" + currentDate;
    }
    if (currentHours <= 9) {
      currentHours = "0" + currentHours;
    }
    if (currentMin <= 9) {
      currentMin = "0" + currentMin;
    }
    if (currentSec <= 9) {
      currentSec = "0" + currentSec;
    }
  
    if (currentMiliSec <= 9) {
      currentMiliSec = "00" + currentMiliSec;
    } else if (currentMiliSec <= 99) {
      currentMiliSec = "0" + currentMiliSec;
    }

    if (currentMiliSec >= 1000){
      
    }
  
    let currentTime =
      currentYear +
      "/" +
      currentMonth +
      "/" +
      currentDate +
      " " +
      currentHours +
      ":" +
      currentMin +
      ":" +
      currentSec +
      ":" +
      currentMiliSec;
  
    return currentTime;
  }
  
  function updateTimeDivs() {
    let timeDivs = document.getElementsByClassName("time-div");
    for (let i = 0; i < timeDivs.length; i++) {
      timeDivs[i].innerHTML = updateTime();
    }
  }
  
  function initializeTimeDivs() {
    let clock = document.getElementById("clock");
    for (let i = 0; i < 300; i++) {
      let timeDiv = document.createElement("div");
      timeDiv.className = "time-div";
      clock.appendChild(timeDiv);
    }
  }
  
  initializeTimeDivs();
  setInterval(function() {
    updateTimeDivs();
    i++; // 每次调用 updateTime() 时增加变量 i
  }, 1);
  
  
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
    // hourdiv.style.backgroundColor = "hsl(" + hourToHue + ", 100%, 80%)"
    // mindiv.style.backgroundColor = "hsl(" + minToHue + ", 100%, 80%)"
    // secdiv.style.backgroundColor = "hsl(" + secToHue + ", 100%, 80%)"
    // milisecdiv.style.backgroundColor = "hsl(" + milisecToHue + ", 100%, 80%)"

    // time.style.color = "hsl(" + hourToHue + ", 100%, 80%)"
    time.innerHTML=currentHour+":"+currentMin+":"+currentSec
    +":"+ currentMiliSec

}
    setInterval(timeDiv, 1);

function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
  }
