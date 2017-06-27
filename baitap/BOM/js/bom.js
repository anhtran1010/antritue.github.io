//Khoi tao object du lieu
var data = [
	{
		name: "Where is Hollywood?",
		answer1: "Washington",
		answer2: "New York",
		answer3: "California",
		correct: "California"
	},
	{
		name: "Which movie was directed by Christopher Nolan?",
		answer1: "Inception",
		answer2: "Transformers",
		answer3: "Watchmen",
		correct: "Inception"
	},
	{
		name: "Which character is from Marvel?",
		answer1: "Dr.Manhattan",
		answer2: "Captain America",
		answer3: "Batman",
		correct: "Captain America"
	},
	{
		name: "Who invented the light bulb?",
		answer1: "Albert Einstein",
		answer2: "Thomas Edison",
		answer3: "Marie Curie",
		correct: "Thomas Edison"
	},
	{
		name: "Which game was awarded 'Game of the year' in 2015?",
		answer1: "The Witcher 3: Wild Hunt",
		answer2: "Bloodbourne",
		answer3: "Fallout 4",
		correct: "The Witcher 3: Wild Hunt"
	}
];

//ham truyen cau hoi vao mang
function fill(a){
	document.getElementById("name").innerText=a.name;
	document.getElementById("bt1").innerText=a.answer1;
	document.getElementById("bt2").innerText=a.answer2;
	document.getElementById("bt3").innerText=a.answer3;
}

// khoi tao de bai
var current = 0;
var result = 0;
fill(data[current]);

//ham chuyen cau hoi
function increaseQuestion(b){

	//kiem tra dung sai
	if (b.innerText==data[current].correct){
		result+=1;
	}
	if (result==5){
		window.location.assign("chucmung.html");
	}

	if (current==4 && result<5) {
		window.location.assign("choilai.html");
	}
	//chuyen cau hoi
	current+=1;
	fill(data[current]);

}

function reload(){
	window.location.assign("bom.html");
}

















