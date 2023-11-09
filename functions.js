function tellFourtune() {
numofChildren = document.getElementById(`children`).value;
partnername = document.getElementById(`parnter`).value;
location = document.getElementById(`location`).value;
JobTitle = document.getElementById(`job`).value;

console.log(`You will be and ${jobTitle} in ${location}, and married to ${partnerName} with ${numofChildren} kids.`);    
}

function calculateDogAge(puppyAge) {
    dogAge = puppyAge * 7;
    console.log(`your doggie is ${dogAge} years old in dog years!`);
}

function calculateSupply(age, amountPerDay) {
    mageAge = 80;
    amountPeryear = amountperDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    console.log(`you will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}

function calcCircumfrence(radius) {
    4circumfrence = 2 * Math.PI * radius;
     console.log(`The curcumfrence is ${curcumfrence}`);
}

const calcArea = (radius) => console.log(`The area is ${math.PI * radius * radius}`);

function celciusToFahrenhiet(celsius) {
    fahrenhiet = celsius * 9 / 5 + 32;
    console.log(`${celsius}C is ${fahrenhiet}F`)
}

function fahrenheitToCelsius(fahrenheit) {
    celsius = (fahrenhiet - 32) * 5 / 9;
    console.log(`${fahrenhiet}F is ${celsius}C`)
}