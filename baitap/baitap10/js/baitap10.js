var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var wrap = document.getElementById("wrap");


function changeFontSize(x){
	wrap.style.fontSize = x;
	return wrap.style.fontSize;
}
changeFontSize("25px");


function increaseFontSize(x){
	var p = document.getElementById(x);
	p.style.fontSize = "larger"; 
}
increaseFontSize("p1");


function decreaseFontSize(x){
	var p = document.getElementById(x);
	p.style.fontSize = "smaller";
}
decreaseFontSize('p3');


function changeColor(){
	p1.style.color = "blue";
	p2.style.color = "yellow";
	p3.style.color = "red";
}
changeColor();


function changeBgColor(color){
	document.body.style.backgroundColor = color;
}
changeBgColor("gray");


function copyContent(paragraph1, paragraph2){
	var x1 = document.getElementById(paragraph1);
	var x2 = document.getElementById(paragraph2);
	x1.innerHTML = x2.innerText;
}
copyContent("p1","p2")