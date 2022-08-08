function calculate () {
	let a = document.querySelector("#a").value;
	let b = document.querySelector("#b").value;
	let c = document.querySelector("#c").value;
	let delta = b*b - 4*a*c;
	displayDelta(delta);
}

function displayDelta (delta) {
	let result = document.querySelector("#result");
	result.innerHTML = "D = b^2 - 4 * a * c = " + delta;
	displayRoot(delta, a.value, b.value, c.value);
}


function displayRoot (delta, a, b, c) {
	if (delta === 0) {
		let root = (-b + Math.sqrt(delta)) / (2*a);
		let finalRes = document.querySelector("#final");
		finalRes.innerHTML = `(${a})x^2 + (${b})x + c = ${root}`;
	} else {
		let finalRes = document.querySelector("#final");
		finalRes.innerHTML = "Discriminant must be 0"
	}
}

