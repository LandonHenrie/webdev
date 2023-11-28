function expense() {
    taxes = document.getElementById(`taxes`).value;
    Total Money = document.getElementById(`Total Expense`).value;
    rest of money = document.getElementById('Rest OF Money').value

    document.getElementById("fortune").innerHTML = `You will have ${numofChildren} children with ${partnername} and work as a ${job}`
}

document.getElementById("Money").addEventListener("click", function() {
    document.getElementById("Money").innerHTML = "More Money";
});