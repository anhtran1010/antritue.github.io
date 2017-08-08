var cards = ["anh1.png","anh2.png","anh3.png","anh4.png","anh5.png","anh6.png","anh7.png","anh8.png","anh9.png"]
var current = null;
var count = 0;
var remainingTime = 50;
var run = null;

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
    $(cards).css('pointer-events','none');
})

function start() {
    var elem = document.getElementById('bar');
    var width = 100;
    run = setInterval(frame, 1000);
    $('#start-box').css('opacity', '0');
    $('#progress').css('opacity', '1');
    $('#cover').css('display','none');
    document.getElementById('bg-music').play();
    
    function frame() {
        if (width<=0 && remainingTime<=0){
            clearInterval(run);
            $('.lose img').css('top','0');
            document.getElementById('defeat').play();
            $('#cover').css('display','');
        } else {
            width=width-2;
            remainingTime--;
            elem.style.width = width + '%';
            if (width>=67) {
                $('#bar').css('background-color','green');
            } else if (width>=33) {
                $('#bar').css('background-color','#dd6013');
            } else {
                $('#bar').css('background-color','#b30000');
            }
            console.log(remainingTime);
        }
    }
}

function flip(card) {
    $(card).toggleClass("flip");
    $(card).css('pointer-events', 'none');

    if (current==null) { // ban dau phai chon con dau de kiem tra da
        current=$(card);
    } else {
        $('.cards').css('pointer-events', 'none');// ko bam dc lan 3

        //khac nhau
        setTimeout(function(){
            if (current.attr('data-name')!=$(card).attr('data-name')) {
                $(card).toggleClass('flip');
                current.toggleClass('flip');
                document.getElementById('error').play();
            } else {
                //giong nhau
                $(card).css('opacity', '0');
                current.css('opacity', '0');
                count++;
                if (count == cards.length/2) {
                    $('.win img').css('top','0');
                    document.getElementById('victory').play();
                    clearInterval(run);
                }
                document.getElementById('correct').play();
            }

            current=null;
            $('.cards').css('pointer-events', 'auto');// xu li xong bam tiep
        },700)
    }
}
