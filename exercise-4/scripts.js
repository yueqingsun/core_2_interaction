let adj=["bald","condemned","disgusting","handsome","grumpy","horrible","jealous","lazy","mysterious","sexy","famous","narcissistic","poor","cheap","poor","proud","scary","fierce","massive"]

let adj1=adj[Math.floor(Math.random()*adj.length)]
let adj2=adj[Math.floor(Math.random()*adj.length)]
let adj3=adj[Math.floor(Math.random()*adj.length)]
document.getElementById("adj1").innerHTML = adj1
document.getElementById("adj2").innerHTML = adj2
document.getElementById("adj3").innerHTML = adj3

let color=["camouflage color","scarlet","transparent","muddy","worn"]
let knife=color[Math.floor(Math.random()*color.length)]
document.getElementById("color").innerHTML = knife

let verbA=["twerk","dive","twist","creep","vowit","spit","bubble","do sit-ups"]
let v1=verbA[Math.floor(Math.random()*verbA.length)]
document.getElementById("v1").innerHTML = v1

let verbB=["slap","shake","eat","wash","kill","pinch","kiss","laugh"]
let v2=verbB[Math.floor(Math.random()*verbA.length)]
document.getElementById("v2").innerHTML = v2

let noun=["butt","trash","cash","seaweed","pepper","feet","sock","nail","teeth","candy","melatonin","egg","gum","gun","tougue"]
let n1=noun[Math.floor(Math.random()*noun.length)]
let n2=noun[Math.floor(Math.random()*noun.length)]
document.getElementById("n1").innerHTML = n1
document.getElementById("n2").innerHTML = n2

console.log(adj1)
console.log(adj2)
console.log(adj3)