function convertirFahrent(){
	var fah = document.getElementById('fahrenheit').value - 32 * 5/9;
	document.getElementById('celsius').value= Math.round(fah); 
}

function convertirCelsius(){
	var cels = document.getElementById('celsius').value * 9/5 + 32;
	document.getElementById('fahrenheit').value = Math.round(cels);
}