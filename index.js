/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

let inputBox = document.querySelector("#amount-input");
let convertButton = document.querySelector("#convert-button");
let lengthResult = document.querySelector("#length-section p");
let volumeResult = document.querySelector("#volume-section p");
let massResult = document.querySelector("#mass-section p");


convertButton.addEventListener('click', convert);

function convert(){
	let amount = inputBox.value;

	lengthResult.textContent = `${amount} meters = ${(amount * 3.28084).toFixed(3)} feet | ${amount} feet = ${(amount / 3.28084).toFixed(3)} meters`
	volumeResult.textContent = `${amount} liters = ${(amount * 0.264172).toFixed(3)} gallons | ${amount} gallons = ${(amount / 0.264172).toFixed(3)} liters`
	massResult.textContent = `${amount} kilos = ${(amount * 2.20462).toFixed(3)} pounds | ${amount} pounds = ${(amount / 2.20462).toFixed(3)} kilos`
}

