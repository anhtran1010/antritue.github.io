var cards = ["anh1.png","anh2.png","anh3.png","anh4.png","anh5.png","anh6.png","anh7.png","anh8.png","anh9.png"]
var current = null;
var count = 0;

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
};

$(function(){
    cards = cards.concat(cards);
    cards = shuffle(cards);
    var html = "";
    for (var i = 0; i < cards.length; i++) {
        html+='<div class="cards" data-name="card'+cards[i]+'" onclick="flip(this)"><div class="back"><img src="../img/'+cards[i]+'"/></div><div class="front"><img src="../img/back.png"/></div></div>';
    };
    $('.grid').html(html);
})

function flip(cards) {
    $(cards).toggleClass("flip");
    $(cards).css('pointer-events', 'none');
    if (current==null) { // ban dau phai chon con dau de kiem tra da
        current=$(cards);
    } else {
        $('.cards').css('pointer-events', 'none');// ko bam dc lan 3
        //khac nhau
        setTimeout(function(){
            if (current.attr('data-name')!=$(cards).attr('data-name')) {
            $(cards).toggleClass('flip');
            current.toggleClass('flip');
            document.getElementById('error').play();
        } else {
            //giong nhau
            $(cards).css('opacity', '0');
            current.css('opacity', '0');
            count++;
            if (count == 9) alert("you won")
            document.getElementById('correct').play();
        }
        current=null;
        $('.cards').css('pointer-events', 'auto');// xu li xong bam tiep
        },500)
    }
}


   



