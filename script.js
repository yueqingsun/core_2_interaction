function changeBG(){
    let currentHour = new Date().getHours();
let hourToLight = map(currentHour, 0, 23, 90, 0);
document.body.style.backgroundColor = "hsl(46, 82%,"+ hourToLight+"%)"
}


setInterval(changeBG,1000)

function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
  }
