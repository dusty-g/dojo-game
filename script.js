$(document).ready(function(){
    $("button").hover(function(){
        $(".wrapper").css("background-image", "url('matrix.jpg')");
    }, function(){
        $(".wrapper").css("background-image", "url('black.jpg')");
    }
    
    );
});