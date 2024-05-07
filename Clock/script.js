window.onload = function() {
    var containerWidth = document.querySelector('.container').scrollWidth;
    var halfViewportWidth = window.innerWidth / 2;
    var initialScrollPosition = (containerWidth / 2) - halfViewportWidth;
    window.scrollTo(initialScrollPosition, 0);
  };


let today = new Date();
let currentHourUTC = today.getUTCHours();

function UTCminus12(){
  let UTCminus12 = document.getElementById("UTC-12hours")
  let UTC012 = currentHourUTC - 12;

  if(currentHourUTC < 12) {   
    UTC012 = UTC012 + 24;
  }
  let UTCminus12Length = map(UTC012, 0, 23, 0, 100);

  UTCminus12.style.width = UTCminus12Length + "%"
}

function UTCminus11(){
  let UTCminus11 = document.getElementById("UTC-11hours")
  let UTC011 = currentHourUTC - 11;

  if(currentHourUTC < 11) {   
    UTC011 = UTC011 + 24;
  }
  let UTCminus11Length = map(UTC011, 0, 23, 0, 100);

  UTCminus11.style.width = UTCminus11Length + "%"
}

function UTCminus10(){
  let UTCminus10 = document.getElementById("UTC-10hours")
  let UTC010 = currentHourUTC - 10;

  if(currentHourUTC < 10) {   
    UTC010 = UTC010 + 24;
  }
  let UTCminus10Length = map(UTC010, 0, 23, 0, 100);

  UTCminus10.style.width = UTCminus10Length + "%"
}

function UTCminus9(){
  let UTCminus9 = document.getElementById("UTC-9hours")
  let UTC09 = currentHourUTC - 9;

  if(currentHourUTC < 9) {   
    UTC09 = UTC09 + 24;
  }
  let UTCminus9Length = map(UTC09, 0, 23, 0, 100);

  UTCminus9.style.width = UTCminus9Length + "%"
}

function UTCminus8(){
  let UTCminus8 = document.getElementById("UTC-8hours")
  let UTC08 = currentHourUTC - 8;

  if(currentHourUTC < 8) {   
    UTC08 = UTC08 + 24;
  }
  let UTCminus8Length = map(UTC08, 0, 23, 0, 100);

  UTCminus8.style.width = UTCminus8Length + "%"
}

function UTCminus7(){
  let UTCminus7 = document.getElementById("UTC-7hours")
  let UTC07 = currentHourUTC - 7;

  if(currentHourUTC < 7) {   
    UTC07 = UTC07 + 24;
  }
  let UTCminus7Length = map(UTC07, 0, 23, 0, 100);

  UTCminus7.style.width = UTCminus7Length + "%"
}

function UTCminus6(){
  let UTCminus6 = document.getElementById("UTC-6hours")
  let UTC06 = currentHourUTC - 6;

  if(currentHourUTC < 6) {   
    UTC06 = UTC06 + 24;
  }
  let UTCminus6Length = map(UTC06, 0, 23, 0, 100);

  UTCminus6.style.width = UTCminus6Length + "%"
}

function UTCminus5(){
  let UTCminus5 = document.getElementById("UTC-5hours")
  let UTC05 = currentHourUTC - 5;

  if(currentHourUTC < 5) {   
    UTC05 = UTC05 + 24;
  }
  let UTCminus5Length = map(UTC05, 0, 23, 0, 100);

  UTCminus5.style.width = UTCminus5Length + "%"
}

function UTCminus4(){
  let UTCminus4 = document.getElementById("UTC-4hours")
  let UTC04 = currentHourUTC - 4;

  if(currentHourUTC < 4) {   
    UTC04 = UTC04 + 24;
  }
  let UTCminus4Length = map(UTC04, 0, 23, 0, 100);

  UTCminus4.style.width = UTCminus4Length + "%"
}

function UTCminus3(){
  let UTCminus3 = document.getElementById("UTC-3hours")
  let UTC03 = currentHourUTC - 3;

  if(currentHourUTC < 3) {   
    UTC03 = UTC03 + 24;
  }
  let UTCminus3Length = map(UTC03, 0, 23, 0, 100);

  UTCminus3.style.width = UTCminus3Length + "%"
}

function UTCminus2(){
  let UTCminus2 = document.getElementById("UTC-2hours")
  let UTC02 = currentHourUTC - 2;

  if(currentHourUTC < 2) {   
    UTC02 = UTC02 + 24;
  }
  let UTCminus2Length = map(UTC02, 0, 23, 0, 100);

  UTCminus2.style.width = UTCminus2Length + "%"
}

function UTCminus1(){
  let UTCminus1 = document.getElementById("UTC-1hours")
  let UTC01 = currentHourUTC - 1;

  if(currentHourUTC < 1) {   
    UTC01 = UTC01 + 24;
  }
  let UTCminus1Length = map(UTC01, 0, 23, 0, 100);

  UTCminus1.style.width = UTCminus1Length + "%"
}

function UTC0(){
  let UTC0 = document.getElementById("UTC0hours")
  let UTC0hour = currentHourUTC
  let UTC0Length = map(UTC0hour, 0, 23, 0, 100);
  UTC0.style.width = UTC0Length + "%"
  // console.log(UTC0hour)
}

function UTCplus1(){
  let UTCplus1 = document.getElementById("UTC+1hours")
  let UTC1 = currentHourUTC + 1;

  if(currentHourUTC > 22) {
    currentHourUTC = currentHourUTC - 22;
    
  }
  let UTCplus1Length = map(UTC1, 0, 23, 0, 100);

  UTCplus1.style.width = UTCplus1Length + "%"
}

function UTCplus2(){
  let UTCplus2 = document.getElementById("UTC+2hours")
  let UTC2 = currentHourUTC + 2;

  if(currentHourUTC > 21) {
    currentHourUTC = currentHourUTC - 21;
    
  }
  let UTCplus2Length = map(UTC2, 0, 23, 0, 100);

  UTCplus2.style.width = UTCplus2Length + "%"
}

function UTCplus3(){
  let UTCplus3 = document.getElementById("UTC+3hours")
  let UTC3 = currentHourUTC + 3;

  if(currentHourUTC > 20) {
    currentHourUTC = currentHourUTC - 20;
    
  }
  let UTCplus3Length = map(UTC3, 0, 23, 0, 100);

  UTCplus3.style.width = UTCplus3Length + "%"
}

function UTCplus4(){
  let UTCplus4 = document.getElementById("UTC+4hours")
  let UTC4 = currentHourUTC + 4;

  if(currentHourUTC > 19) {
    currentHourUTC = currentHourUTC - 19;
    
  }
  let UTCplus4Length = map(UTC4, 0, 23, 0, 100);

  UTCplus4.style.width = UTCplus4Length + "%"
}

function UTCplus5(){
  let UTCplus5 = document.getElementById("UTC+5hours")
  let UTC5 = currentHourUTC + 5;

  if(currentHourUTC > 18) {
    currentHourUTC = currentHourUTC - 18;
    
  }
  let UTCplus5Length = map(UTC5, 0, 23, 0, 100);

  UTCplus5.style.width = UTCplus5Length + "%"
}

function UTCplus6(){
  let UTCplus6 = document.getElementById("UTC+6hours")
  let UTC6 = currentHourUTC + 6;

  if(currentHourUTC > 17) {
    currentHourUTC = currentHourUTC - 17;
    
  }
  let UTCplus6Length = map(UTC6, 0, 23, 0, 100);

  UTCplus6.style.width = UTCplus6Length + "%"
}

function UTCplus7(){
  let UTCplus7 = document.getElementById("UTC+7hours")
  let UTC7 = currentHourUTC + 7;

  if(currentHourUTC > 16) {
    currentHourUTC = currentHourUTC - 16;
    
  }
  let UTCplus7Length = map(UTC7, 0, 23, 0, 100);

  UTCplus7.style.width = UTCplus7Length + "%"
}

function UTCplus8(){
  let UTCplus8 = document.getElementById("UTC+8hours")
  let UTC8 = currentHourUTC + 8;

  if(currentHourUTC > 15) {
    currentHourUTC = currentHourUTC - 15;
    
  }
  let UTCplus8Length = map(UTC8, 0, 23, 0, 100);

  UTCplus8.style.width = UTCplus8Length + "%"
}

function UTCplus9(){
  let UTCplus9 = document.getElementById("UTC+9hours")
  let UTC9 = currentHourUTC + 9;

  if(currentHourUTC > 14) {
    currentHourUTC = currentHourUTC - 14;
    
  }
  let UTCplus9Length = map(UTC9, 0, 23, 0, 100);

  UTCplus9.style.width = UTCplus9Length + "%"
}

function UTCplus10(){
  let UTCplus10 = document.getElementById("UTC+10hours")
  let UTC10 = currentHourUTC + 10;

  if(currentHourUTC > 13) {
    currentHourUTC = currentHourUTC - 13;
    
  }
  let UTCplus10Length = map(UTC10, 0, 23, 0, 100);

  UTCplus10.style.width = UTCplus10Length + "%"
}

function UTCplus11(){
  let UTCplus11 = document.getElementById("UTC+11hours")
  let UTC11 = currentHourUTC + 11;

  if(currentHourUTC > 12) {
    currentHourUTC = currentHourUTC - 12;
    
  }
  let UTCplus11Length = map(UTC11, 0, 23, 0, 100);

  UTCplus11.style.width = UTCplus11Length + "%"
}
setInterval(UTCminus12, 1);
setInterval(UTCminus11, 1);
setInterval(UTCminus10, 1);
setInterval(UTCminus9, 1);
setInterval(UTCminus8, 1);
setInterval(UTCminus7, 1);
setInterval(UTCminus6, 1);
setInterval(UTCminus5, 1);
setInterval(UTCminus4, 1);
setInterval(UTCminus3, 1);
setInterval(UTCminus2, 1);
setInterval(UTCminus1, 1);
setInterval(UTC0, 1);
setInterval(UTCplus1, 1);
setInterval(UTCplus2, 1);
setInterval(UTCplus3, 1);
setInterval(UTCplus4, 1);
setInterval(UTCplus5, 1);
setInterval(UTCplus6, 1);
setInterval(UTCplus7, 1);
setInterval(UTCplus8, 1);
setInterval(UTCplus9, 1);
setInterval(UTCplus10, 1);
setInterval(UTCplus11, 1);

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
    let timeZoneBlockMin = document.querySelectorAll(".timezoneblock2")
    let timeZoneBlockSec = document.querySelectorAll(".timezoneblock3")
    
    let hourdiv = document.getElementById("hour");
    let mindiv = document.getElementById("min");
    let secdiv = document.getElementById("sec");
    let time = document.getElementById("time");
    
    let now = new Date();
    let currentHour = now.getHours();
    let currentMin = now.getMinutes();
    let currentSec = now.getSeconds();

    
    let hourToSize = map(currentHour, 0, 23, 0, 100);
    let minToSize = map(currentMin, 0, 59, 0, 100);
    let secToSize = map(currentSec, 0, 59, 0, 100);
    let hourToHue = map(currentHour, 0, 24, 0, 360);
    let secToHue = map(currentSec, 0, 59, 0, 360);

    hourdiv.style.width = hourToSize + "%"
    mindiv.style.width = minToSize + "%"
    secdiv.style.width = secToSize + "%"

    for (let i = 0; i < timeZoneBlockSec.length; i++) {
      timeZoneBlockSec[i].style.width = secToSize + "%";
  }

  for (let i = 0; i < timeZoneBlockMin.length; i++) {
      timeZoneBlockMin[i].style.width = minToSize + "%";
  }

  document.body.style.backgroundColor = "hsl(" + secToHue + ", 100%, 50%)"
  // console.log(now.getTimezoneOffset() / 60)
  // console.log(new Date(Date.UTC()))
  const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
// const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

// console.log(utcDate1.toUTCString());
}
    setInterval(timeDiv, 1);

function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
  }
