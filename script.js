$(document).ready(function(){
    $(".magic").hover(function(){
        var test = $(this).attr("id");
        $(".wrapper").css("background-image", "url("+test+".jpg)");
    }, function(){
        $(".wrapper").css("background-image", "url('black.jpg')");
    }
    
    );
    $(".magic").click(function(){
        var different = $(this).attr("id");
        console.log(different);
        $(".wrapper").css("background-image", "url("+different+".jpg)");
        $("button").css("display", "none");
        $("button").attr("class", "no-hover");
        $("h1").text("Choose Fighter");
        $("h1").next().html("<select id='first'><option value='raphael1'>Raphael</option><option value='donny1'>Donny</option><option value='mikey1'>Mikey</option></select> <select id='second' ><option value='raphael2'>Raphael</option><option value='donny2'>Donny</option><option value='mikey2'>Mikey</option></select> ");
        $("#secret").css("display", "block");
    });
    $("#secret").click(function(){
        $(".ninjas").css("display", "none");
        var ninja1 = $("#first").val();
        console.log(ninja1);
        var ninja2 = $("#second").val();
        console.log(ninja2);

        $("#"+ninja1).css("display", "inline-block");
        $("#"+ninja2).css("display", "inline-block");
        $("#"+ninja2).css("margin-left", "200px");


    })


});