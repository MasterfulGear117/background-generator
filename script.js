var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

var randomColor = function() {
	var random = Math.floor(Math.random()*16777215).toString(16);
	if (random.length === 5) {
		random = "0" + random;
	} else if (random.length < 5) {
		random = "00" + random;
	}
	return "#" + random
}

function randomGradient() {

	var randomColors = [randomColor(), randomColor()]
	console.log(randomColors);
	color1.value = randomColors[0];
	color2.value = randomColors[1];
	setGradient();

}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomGradient);