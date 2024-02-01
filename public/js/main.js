import data from "./../assets/json/molengeek.json" assert { type: "json" };

// $$$$$$$$$$$$$$$$$$$$$$$$$ CAROUSSEL $$$$$$$$$$$$$$$$$$$$$$$$$$$$

let logo1 = data.partenaires.bxFormation.logo
let logo2 = data.partenaires.pwc.logo
let logo3 = data.partenaires.aws.logo
let logo4 = data.partenaires.Microsoft.logo
let logo5 = data.partenaires.google.logo
let logo6 = data.partenaires.proximus.logo
let logo7 = data.partenaires.actiris.logo
let logo8 = data.partenaires.meta.logo

let logo1Html = document.querySelector(".d-block")
let logo2Html = document.querySelectorAll(".d-block")[1]
let logo3Html = document.querySelectorAll(".d-block")[2]
let logo4Html = document.querySelectorAll(".d-block")[3]
let logo5Html = document.querySelectorAll(".d-block")[4]
let logo6Html = document.querySelectorAll(".d-block")[5]
let logo7Html = document.querySelectorAll(".d-block")[6]
let logo8Html = document.querySelectorAll(".d-block")[7]


logo1Html.src = logo1
logo2Html.src = logo2
logo3Html.src = logo3
logo4Html.src = logo4
logo5Html.src = logo5
logo6Html.src = logo6
logo7Html.src = logo7
logo8Html.src = logo8

// $$$$$$$$$$$$$$$$$$$$$$$$$ dates importantes $$$$$$$$$$$$$$$$$$$$$$

let dateClass = document.querySelectorAll(".date")
let eventClass = document.querySelectorAll(".eventDate")

let dateMolengeek = data.formations.seancesInfos

console.log(dateMolengeek);

let i = 0

dateClass.forEach(element => {
    element.innerText = dateMolengeek[i].date

    i++

});

let j = 0

eventClass.forEach(element => {
    element.innerText = dateMolengeek[j].nom

    j++

});

// $$$$$$$$$$$$$$$$$$$$$$$$$ menu accordeon $$$$$$$$$$$$$$$$$$$$$$

let menuF = document.querySelector(".menuF")

let button1 = document.querySelector(".buttonFormations1")
let button2 = document.querySelector(".buttonFormations2")

let button1Div
let textF = data.formations.formationsCourtes


let b = 0


button1.addEventListener("click", () => {

    button1Div = document.createElement("div")

    menuF.appendChild(button1Div)

    textF.forEach(element => {
    
        button1Div.innerText = element[b].nom
        
        b++
    });
   


})

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
    titleItem[v].innerText=element
    v++ 

});

let tabR = [r1,r2,r3,r4,r5]
let x = 0

tabR.forEach(element => {
    reponseItem[x].innerText = element

    x++ 
});

// $$$$$$$$$$$$$$$$$$$$$$$$$ reseaux $$$$$$$$$$$$$$$$$$$$$$

let insta = document.querySelector(".instagram")
let facebook = document.querySelector(".facebook")
let twitter = document.querySelector(".twitter")
let linkedin = document.querySelector(".linkedin")

let jsonInsta = data.reseauxSociaux.instagram
let jsonface = data.reseauxSociaux.facebook
let jsontwitt = data.reseauxSociaux.twitter
let jsonlink = data.reseauxSociaux.linkedin

// let divface = document.querySelectorAll[0]
// let divtwi = document.querySelectorAll[1]
// let divinsta = document.querySelectorAll[2]
// let divlin = document.querySelectorAll[3]


insta.addEventListener("click", () => {
    insta.href = jsonInsta
})

facebook.addEventListener("click", () => {
    facebook.href = jsonface
})

twitter.addEventListener("click", () => {
    twitter.href = jsontwitt
})

linkedin.addEventListener("click", () => {
    linkedin.href = jsonlink
})



// $$$$$$$$$$$$$$$$$$$$$$$$$ job $$$$$$$$$$$$$$$$$$$$$$

let jobPoste = document.querySelectorAll(".poste")
let jobdDetail = document.querySelectorAll(".detail")

let jobData = data.jobs

let z = 0

jobPoste.forEach(element => {
    
    element.innerText = jobData[z].poste

    z++

});


let m = 0

jobdDetail.forEach(element => {
    
    element.innerText = jobData[m].description

    m++

});

