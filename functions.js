function tellFortune() {
    numofChildren = document.getElementById(`children`).value;
    partnername = document.getElementById(`name`).value;
    job = document.getElementById('job').value

    document.getElementById("fortune").innerHTML = `You will have ${numofChildren} children with ${partnername} and work as a ${job}`
}

function calculateDogAge() {
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    document.getElementById("age").innerHTML = `your doggie is ${dogAge} years old in dog years!`;
}

function calculateSupply() {
    document.getElementById("current-age").value
    amountPerDay.getElementById("amount-per-day").value

    mageAge = 80;
    amountPeryear = amountperDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    document.getElementById("supply").innerHTML = `you will need ${totalAmount} to last you until the ripe old age of ${maxAge}`;
}

// function calcCircumfrence() {
//     circumfrence = 2 * Math.PI * radius;
//      document.getElementById(
//         "circumfenece"
//      )
//      (inner.HTML`The circumfrence is ${circumfrence}`);
     
// }

// const calcArea = (radius) => console.log(`The area is ${math.PI * radius * radius}`);

// function celciusTofahrenhiet() {
//     fahrenhiet = celcius * 9 / 5 + 32;
//     document.getElementById(`fahrenhiet`).innerHTML = (`${celcius}C is ${fahrenhiet}F`)

// }

// function fahrenheitToCelsius(fahrenheit) {
//     celsius = (fahrenhiet - 32) * 5 / 9;
//     console.log(`${fahrenhiet}F is ${celsius}C`)
// }