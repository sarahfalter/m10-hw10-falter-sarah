// It is always helpful to use comments in your code!

//The number “212” immediately prints inside of the span with the ID "boiling-temp" using an arrow function

const addBoil = (temperature) => {
    document.getElementById("boiling-temp").innerHTML += 212;
}
addBoil();

//The number “32” immediately prints inside of the span with the ID "freezing-temp" using an arrow function

const addFreeze = (temperature) => {
    document.getElementById("freezing-temp").innerHTML += 32;
}
addFreeze();

//Any number of your choice immediately prints inside of the span with the ID "water-temp" using an arrow function

const addWater = (temperature) => {
    document.getElementById("water-temp").innerHTML += 75;
}
addWater();



//If the number stored in “water-temp” is above 212, remove the class “hide” and add the class “show” to the section with the ID “boiling” so that the message “The water is hot. I think it is boiling.” appears//

