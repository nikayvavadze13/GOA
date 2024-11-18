const body = document.getElementById("body")

let newP = document.createElement("p")
newP.textContent = Math.floor(Math.random() * 1000)

body.appendChild(newP)