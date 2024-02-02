import data from "../assets/json/molengeek.json" assert { type: "json" };

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