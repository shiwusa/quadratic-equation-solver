let questions = [
"Garampani sanctuary is located at",
 "Hitler party which came into power in 1933 is known as",
 "FFC stands for",
 "Golf player Vijay Singh belongs to which country?",
 "First Afghan War took place in"
 ];
let options = [
"Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland",
"Labour Party", "Nazi Party", "Ku-Klux-Klan",
"Foreign Finance Corporation", "Film Finance Corporation", "Federation of Football Council",
"Fiji", "India", "UK",
"1839", "1843", "1833"
];
let answers = [ //todo
"Diphu, Assam",
"Nazi Party",
"Film Finance Corporation",
"Fiji",
"1839"
];

function start() {
	document.getElementById("quiz").style.display = "block";
	document.getElementById("start").style.display = "none";
	display();
}
	
	let i = 0;
	let j = 0;

function display() {	
	document.getElementById("finish").style.display = "none";
	let question = document.querySelector("#question");
	let option1 = document.querySelector("#first");
	let option2 = document.querySelector("#second");
	let option3 = document.querySelector("#third");
	question.innerHTML = questions[i];
	option1.innerHTML = options[j];
	option2.innerHTML = options[j+1];
	option3.innerHTML = options[j+2];
}

function next() {
	if (i < 4 ) {
		i++;
		j +=3;
		display();
	} else {
		document.getElementById("quiz").style.display = "none";
		let results = document.querySelector("#finish");
		results.style.display = "block";
		results.innerHTML = "So, this is the end and I have no idea how to check your answers:)";
		let again = document.querySelector("#start");
		again.style.display = "inline-block";
		i = 0;
		j = 0;
		again.innerHTML = "Start quiz again";
	}
}

