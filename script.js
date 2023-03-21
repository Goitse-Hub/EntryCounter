
let countElement = document.getElementById("count")
let counter = 0
function increment(){
   counter++
   countElement.innerText = counter      
}

let entryElemtn = document.getElementById("entries-el")
let store = 0
function save(){
   store = " " + counter
   entryElemtn.innerText += store + " - "
}


