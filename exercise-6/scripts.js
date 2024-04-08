setInterval(function() {

// 按照颜色将方块分组
let A = document.querySelectorAll(".A")
let B = document.querySelectorAll(".B")
// let B1 = document.getElementById("B1")
let C = document.querySelectorAll(".C")
let D = document.querySelectorAll(".D")
let E = document.querySelectorAll(".E")
// 每组固定颜色
let colorA=["#ffec80","#83c847","#19aa77","#3d5cc2","#d3c9f7"]
let colorB=["#fff2aa","#9dd56c","#46c598","#627cce","#8f77d6"]
let colorC=["#bce49a","#6cd5b0","#6c94d5","#a08cde","#ffc14f"]
let colorD=["#a2e4cd","#91bbec","#b9abee","#ffcd4f","#2c9c16"]
let colorE=["#adccf0","#c5b9f2","#ffe067","#63ab24","#009174"]
// 随机颜色位于array位置
let randomA=Math.floor(Math.random()*colorA.length)
let randomB=Math.floor(Math.random()*colorB.length)
let randomC=Math.floor(Math.random()*colorC.length)
let randomD=Math.floor(Math.random()*colorD.length)
let randomE=Math.floor(Math.random()*colorE.length)
// 随机颜色
let randomColorA=colorA[randomA]
let randomColorB=colorB[randomB]
let randomColorC=colorC[randomC]
let randomColorD=colorD[randomD]
let randomColorE=colorE[randomE]
// 着色
A[0].style.backgroundColor=randomColorA
B[0].style.backgroundColor=randomColorB
B[1].style.backgroundColor=randomColorB
B[2].style.backgroundColor=randomColorB
B[3].style.backgroundColor=randomColorB
C[0].style.backgroundColor=randomColorC
D[0].style.backgroundColor=randomColorD
D[1].style.backgroundColor=randomColorD
D[2].style.backgroundColor=randomColorD
D[3].style.backgroundColor=randomColorD
E[0].style.backgroundColor=randomColorE
// for(let div of A){
//     div.style.backgroundColor=randomColorA
// }
// for(let div of B){
//     div.style.backgroundColor="red"
// }
// for(let div of C){
//     div.style.backgroundColor=randomColorC
// }
// for(let div of D){
//     div.style.backgroundColor=randomColorD
// }
// for(let div of E){
//     div.style.backgroundColor=randomColorE
// }

// B.style.backgroundColor="red"
// document.querySelectorAll(".B").style.backgroundColor="red"

// function refreshPage() {
//     window.location.reload(); // 重新加载页面
// }

// // 每 5 秒自动刷新页面
// setTimeout(refreshPage, 2000);

// console.log(A)
console.log(B)
console.log(B1)

// B1.style.backgroundColor = "red"
// console.log(randomA)
// console.log(randomColorA)
}, 1000)