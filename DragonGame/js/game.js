var jqscript = document.createElement('script');
jqscript.src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
//jqscript.src = "/js/jquery-1.11.2.min.js";
jqscript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jqscript);

jQuery(document).ready(function () {

    var canvas = jQuery("#gameframe")[0];
    var ctx = canvas.getContext("2d");
    var w = jQuery("#gameframe").width();
    var h = jQuery("#gameframe").height();
    var position = { x: 0, y: 0 };
    var duration = 2000;

    var cellwidth = 50;
    var score = 0;
    var bgimage = new Image();
    bgimage.src = "assets/images/darkcaves.jpg";

    var dragon = new Image();
    dragon.src = "assets/images/dragonBlack_Dragon.png";

    function render() {
        ctx.drawImage(bgimage, 0, 0);
        ctx.drawImage(dragon, w, 100, 75, 110);
    }

    function init() {
        setInt = setInterval(paint, duration);
    }

    init();
    
    //function to check if the dragon has been shot
    canvas.addEventListener('click', function (event) {
       var row = Math.floor((event.pageY - canvas.offsetTop) / 50);
        var col = Math.floor((event.pageX - canvas.offsetLeft) / 50);

        if ((col == pos.x) && (row == pos.y)) {
            paint();
            score += 1;
            duration = duration - 100;
            $("#score").text(score);
            clearInterval(setInt);
            init();
        }
    }, false);

    ////to find random position for the duck
    function newPosition() {
        pos = {
            x: Math.round(Math.random() * (w - cellwidth) / cellwidth),
            y: Math.round(Math.random() * (h - cellwidth) / cellwidth),
        };  
    }

    ////move the duck to a new position
    function paint() {
        img1 = document.getElementById("lake");
        ctx.drawImage(bgimage, 0, 0);
        ctx.strokeRect(0, 0, w, h);
        newPosition();
        ctx.drawImage(duck, pos.x * cellwidth, pos.y * cellwidth, 40, 64);
    }

    ////to reset speed of the duck
    //$("#speedReset").click(function () {
    //    clearInterval(setInt);
    //    duration = 2000;
    //    init();
    //});

    //////to reset score
    //$("#scoreReset").click(function () {
    //    score = 0;
    //    $("#score").text(score);
    //    clearInterval(setInt);
    //    duration = 2000;
    //    init();
    //});

    render();

})

