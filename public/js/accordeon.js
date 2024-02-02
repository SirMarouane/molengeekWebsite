import data from "../assets/json/molengeek.json" assert { type: "json" };


// $$$$$$$$$$$$$$$$$$$$$$$$$ menu accordeon $$$$$$$$$$$$$$$$$$$$$$

let menuF = document.querySelector(".buttonSection")
let test = document.querySelector(".test")

let button1 = document.querySelector(".buttonFormations1")
let button2 = document.querySelector(".buttonFormations2")

button1.addEventListener("click", () => {
    menuF.style.visibility = "visible"
    test.style.visibility = "hidden"



})

button2.addEventListener("click", () => {
    menuF.style.visibility = "hidden"
    test.style.visibility = "visible"
  



})

// let button1Div
// let textF = Object.values(data.formationsCourtes)

// console.log(textF);

// let b = 0

// button1.addEventListener("click", () => {

//     button1Div = document.createElement("div")

//     textF.forEach(element => {
    
//         button1Div.innerText = element.nom
//         b++
        
        
//     });

//     menuF.appendChild(button1Div)

// })
