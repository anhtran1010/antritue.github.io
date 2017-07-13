function press(button){
	var x = $(button).text();
	$('#answer').append(x);
}

function equal(){
	var x = $("#answer").text();
	$("#answer").text(eval(x));
}

function erase(button){
	$("#answer").text('');
}
	
function percent(){
	var x = $("#answer").text();
	$("#answer").text(x/100);
}

function square(){
	var x = $("#answer").text();
	$("#answer").text(Math.pow(x,2)) ;
}

function factorial(){
	var x = $("#answer").text();
	var value=1;
	for (var i = 1; i <= x; i++) {
		value*=i;
	}
	$("#answer").text(value);
}

function changeTheme(){
	$(".number").css({"background-color":"#343333","color":"white"});
	$(".erase").css({"background-color":"#d02200","color":"white"});
	$(".equal").css({"background-color":"#0F62A1","color":"white"});
	$(".math").css({"background-color":"gray","color":"white"});
}