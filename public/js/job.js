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

let logo1Html = document.querySelector(".carourou")
let logo2Html = document.querySelectorAll(".carourou")[1]
let logo3Html = document.querySelectorAll(".carourou")[2]
let logo4Html = document.querySelectorAll(".carourou")[3]
let logo5Html = document.querySelectorAll(".carourou")[4]
let logo6Html = document.querySelectorAll(".carourou")[5]
let logo7Html = document.querySelectorAll(".carourou")[6]
let logo8Html = document.querySelectorAll(".carourou")[7]

logo1Html.src = logo1
logo2Html.src = logo2
logo3Html.src = logo3
logo4Html.src = logo4
logo5Html.src = logo5
logo6Html.src = logo6
logo7Html.src = logo7
logo8Html.src = logo8
