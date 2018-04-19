    var img = $('#floatingImg');

    $('#coderBtn').click(function () {
        img.css("transform", `rotate(360deg)`);
        img.css("transition", "4s ease-out");
        img.attr('src', 'img/coderImg.jpg');
    })

    $('#gamerBtn').click(function () {
        img.css("transform", `rotate(-360deg)`);
        img.css("transition", "4s ease-out");
        img.attr('src', 'img/gamer.jpg');
    })