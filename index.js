

const convertBtn = document.getElementById("convert-btn")
const lenDisplay = document.getElementById("len-display")
const volDisplay = document.getElementById("vol-display")
const massDisplay = document.getElementById("mass-display")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let data = {
    lenConversion: 3.281,
    volConversion: 0.264,
    massConversion: 2.204
}

convertBtn.addEventListener("click", function(){
    let convertVal = document.getElementById("convert-val").value;
    console.log(convertVal)
    data.meters = (convertVal * 1 / data.lenConversion).toFixed(3)
    data.feet = (convertVal * data.lenConversion).toFixed(3)
    data.liters = (convertVal / data.volConversion).toFixed(3)
    data.gallons = (convertVal * data.volConversion).toFixed(3)
    data.kilos = (convertVal / data.massConversion).toFixed(3)
    data.pounds = (convertVal * data.massConversion).toFixed(3)
    renderDom(convertVal)
})

function renderDom(convertVal) {
    lenDisplay.textContent = `${convertVal} meters = ${data.feet} feet | ${convertVal} feet = ${data.meters} meters.`
    volDisplay.textContent = `${convertVal} liters = ${data.gallons} gallons | ${convertVal} gallons = ${data.liters} liters.`
    massDisplay.textContent = `${convertVal} kilos = ${data.pounds} pounds | ${convertVal} pounds = ${data.kilos} kilos.`
}