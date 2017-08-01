var cards = ["anh1.png","anh2.png","anh3.png","anh4.png","anh5.png"]
var current = null;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

$(function() {
	cards = cards.concat(cards);
	cards=shuffle(cards);
	var html = "";
	for (var i = 0; i < cards.length; i++) {
		html+='<div class="cards" onclick="flip(this)"><div class="back"><img src="../img/'+cards[i]+'"/></div><div class="front"><img src="../img/back.png"/></div></div>';
	};
	$('.grid').html(html);
})

function flip(cards) {
	$(cards).css('pointer-events', 'none');
	$(cards).toggleClass("flip");
	if (!current){
		current=$('.cards');
	} else {
		if (current.atrr("data-name") != $(cards).atrr("data-name")){
			//Khac nhau
			setTimeout(function(){
				current.toggleClass('flipped');
				$(cards).toggleClass('flipped');
				current = null;
			},500);
			
		} else {
			//Giong nhau
			setTimeout(function(){
				$(cards).css('opacity','0');
				current.css('opacity','0');
				current = null;
			},200);
			
		}
	}
}

