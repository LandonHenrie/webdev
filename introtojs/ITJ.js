const myName = "Mr Hunt"

let favColor = "Blue"

favColor = "Red"

console.log(favColor)

let age = 30

mainPerson = {
    name: "Mr Hunt",
    age: 30,
    favColor: "Blue",
    favFoods: ["steak", "ice cream", "potatoes"]
}

favthings = [2, "movies"]

const isAlive = true 

// function describePerson(person) {
//     alert("MISSING PERSON ALERT: " + person.name)
//     console.log(`MISSING PEROSON ALERT: ${person.name} MISSING SINCE 2022,
//      WEARING TATTERED OVERALLS`)
// }

// describePerson(mainPerson)


if (age >= 30 && myName === "Mr Hunt") {
    alert("Youre on your way to middle age.")
} else if (age < 30) {
    alert("youre a babay!")
} else {
    alert("how are you alive?")
}



document.getElementById("title").innerHTML = `Hello ${myName}`;


const para = document.createElement("p")
para.innerHTML = "I'm the paragraph you just created."
document.getElementById('div1').appendChild(para)
