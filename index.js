const convert = document.getElementById("convert-button")
const input = document.getElementById("text-field")
const feetOutput = document.getElementById("feet-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")


convert.addEventListener("click", function(){
    const feet = Number(input.value) * 3.281
    const meter = Number(input.value) / 3.281
    feetOutput.textContent = `${Number(input.value)} meter(s) = ${feet.toFixed(3)} feet | ${Number(input.value)} feet = ${meter.toFixed(3)} meters`
})

convert.addEventListener("click", function(){
    const gallon = Number(input.value) * 0.264
    const liter = Number(input.value) / 0.264
    volumeOutput.textContent = `${Number(input.value)} liter(s) = ${gallon.toFixed(3)} gallons | ${Number(input.value)} gallons = ${liter.toFixed(3)} liter(s) `
})

convert.addEventListener("click", function(){
    const pounds = Number(input.value) * 2.204
    const kilogram = Number(input.value) / 2.204
    massOutput.textContent = `${Number(input.value)} kilo = ${pounds.toFixed(3)} pounds | ${Number(input.value)} kilo = ${kilogram.toFixed(3)} kilogram(s)`
})