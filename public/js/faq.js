import data from "../assets/json/molengeek.json" assert { type: "json" };


// $$$$$$$$$$$$$$$$$$$$$$$$$ faq $$$$$$$$$$$$$$$$$$$$$$

let titleItem = document.querySelectorAll(".accordion-button")
let reponseItem = document.querySelectorAll(".accordion-body")

let q1 = data.FAQ.questionI
let q2 = data.FAQ.questionII
let q3 = data.FAQ.questionIII
let q4 = data.FAQ.questionIV
let q5 = data.FAQ.questionV

let r1 = data.FAQ.reponseI
let r2 = data.FAQ.reponseII
let r3 = data.FAQ.reponseIII
let r4 = data.FAQ.reponseIV
let r5 = data.FAQ.reponseV

let tabQ = [q1,q2,q3,q4,q5]

let v = 0

tabQ.forEach(element => {
    titleItem[v].innerText = element

    v++ 

});

let tabR = [r1,r2,r3,r4,r5]
let x = 0

tabR.forEach(element => {
    reponseItem[x].innerText = element

    x++ 

});