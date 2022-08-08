function random () {
	let randNum = Math.round(Math.random() * 10);
	return randNum;
}
let randNum = random();

function compare () {
	let inputNum = document.querySelector("#random").value;
	let answer = document.querySelector("#answer");
	if (inputNum < randNum) {
		answer.innerHTML = "Too small";
	} else  if (inputNum > randNum) {
		answer.innerHTML = "Too big";
	} else if (inputNum == randNum) {
		answer.innerHTML = "Exactly!\nThe answer was: " + randNum;
	}
}

function repeat () {
	randNum = random();
	let answer = document.querySelector("#answer");
	answer.innerHTML = "";
}