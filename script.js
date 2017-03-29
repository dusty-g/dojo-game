$(document).ready(function(){
    $(".magic").hover(function(){
        var test = $(this).attr("id");
        $(".wrapper").css("background-image", "url("+test+".jpg)");
    }, function(){
        $(".wrapper").css("background-image", "url('black.jpg')");
    }
    
    );
    $("button").click(function(){
        var different = $(this).attr("id");
        console.log(different);
        $(".wrapper").css("background-image", "url("+different+".jpg)");
        $("button").css("display", "none");
        $("button").attr("class", "no-hover");
        $("h1").text("Choose Fighter");
        $("h1").next().html("<select><option value='raphael'>Raphael</option><option value='raphael'>Donny</option><option value='raphael'>Mikey</option></select> <select><option value='raphael'>Raphael</option><option value='raphael'>Donny</option><option value='raphael'>Mikey</option></select> ");
    })

});