function press(button){
	document.getElementById("answer").innerText+=button.innerText;
}

function equal(){
	var x = document.getElementById("answer");
	x.innerText = eval(x.innerText);
}

function erase(){
	document.getElementById("answer").innerText="";
}

function percent(){
	var x = document.getElementById("answer");
	x.innerText = x.innerText*100 + "%";
}

function square(){
	var x = document.getElementById("answer");
	x.innerText = x.innerText*x.innerText;
}
function factorial(){
	var x = document.getElementById("answer");
	var value=1;
	for (var i = 1; i < Number(x.innerText); i++) {
		value*=i;
	}
	x.innerText=value;
}