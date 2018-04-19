    var img = $('#floatingImg');
    var coder = "https://marketing-prod.global.ssl.fastly.net/sites/default/files/2017-03/GA_Coding_2x_2.jpg";
    var gamer = "http://www.funkykit.com/wp-content/uploads/2017/12/online-gaming.jpg";

    $('#coderBtn').click(function () {
        img.css("transform", `rotate(360deg)`);
        img.css("transition", "4s ease-out");
        img.attr('src', 'coderImg.jpg');
    })

    $('#gamerBtn').click(function () {
        img.css("transform", `rotate(-360deg)`);
        img.css("transition", "4s ease-out");
        img.attr('src', 'gamer.jpg');
    })