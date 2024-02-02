import data from "./../assets/json/molengeek.json" assert { type: "json" };

// $$$$$$$$$$$$$$$$$$$$$$$$$ reseaux $$$$$$$$$$$$$$$$$$$$$$

let insta = document.querySelector(".instagram")
let facebook = document.querySelector(".facebook")
let twitter = document.querySelector(".twitter")
let linkedin = document.querySelector(".linkedin")

let jsonInsta = data.reseauxSociaux.instagram
let jsonface = data.reseauxSociaux.facebook
let jsontwitt = data.reseauxSociaux.twitter
let jsonlink = data.reseauxSociaux.linkedin

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

let jobPoste = document.querySelectorAll(".heading")
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

