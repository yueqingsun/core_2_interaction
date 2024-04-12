function grabADec(){
    let dec=document.getElementById("dec")
    let decImgs=["dec1.png","dec2.png","dec3.png","dec4.png","dec5.png","dec6.png","dec7.png","dec8.png","dec9.png","dec10.png","dec11.png"]
    let randomDec=Math.floor(Math.random()*decImgs.length)
    dec.src=decImgs[randomDec]
    dec.style.opacity=1
}

function decSize(){
    let decSize=document.getElementById("decSize")
    dec.style.width=decSize.value+"px"
    dec.style.height=decSize.value+"px"
}

function decHori(){
    let decHori=document.getElementById("decHori")
    dec.style.left=decHori.value+"px"
}

function decVerti(){
    let decVerti=document.getElementById("decVerti")
    dec.style.top=decVerti.value+"px"
}

// function decRo(){
//     let decDiv=document.getElementById("decDiv")
//     let decRo=document.getElementById("decRo")
//     decDiv.style.rotate=decRo.value+"deg"
// }

function grabAHead(){
    let head=document.getElementById("head")
    let headImgs=["head1.png","head2.png","head3.png","head4.png","head5.png","head6.png","head7.png","head8.png","head9.png","head10.png","head11.png"]
    let randomHead=Math.floor(Math.random()*headImgs.length)
    head.src=headImgs[randomHead]    
    head.style.opacity=1
}

function headSize(){
    let headSize=document.getElementById("headSize")
    head.style.width=headSize.value+"px"
    head.style.height=headSize.value+"px"    
}

function headHori(){
    let headHori=document.getElementById("headHori")
    head.style.left=headHori.value+"px"
}

function headVerti(){
    let headVerti=document.getElementById("headVerti")
    head.style.top=headVerti.value+"px"
}

// function headRo(){
//     let headRo=document.getElementById("headRo")
//     head.style.rotate=headRo.value+"deg"
// }
