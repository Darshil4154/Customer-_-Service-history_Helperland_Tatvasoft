$(document).ready(function () {
    

    $(".fa-star").before(function(){
        $(".s1,.s2,.s3,.s4").css("color", "#ECB91C");
        $(".info").text("4");
    
    
    });
                $(".s1").click(function () {
                    // alert("button clicked");
                    $(".fa-star").css("color", "silver");
                    $(".s1").css("color", "#ECB91C");
                    $(".info").text("1");
                });
                $(".s2").click(function () {
                    $(".fa-star").css("color", "silver");
    
                    $(".s1,.s2").css("color", "#ECB91C");
                    $(".info").text("2");
    
                });
                $(".s3").click(function () {
                    $(".fa-star").css("color", "silver");
    
                    $(".s1,.s2,.s3").css("color", "#ECB91C");
                    $(".info").text("3");
    
                });
                $(".s4").click(function () {
                    $(".fa-star").css("color", "silver");
    
                    $(".s1,.s2,.s3,.s4").css("color", "#ECB91C");
                    $(".info").text("4");
    
                });
                $(".s5").click(function () {
                    // $(".fa-star").css("color", "silver");
    
                    $(".s1,.s2,.s3,.s4,.s5").css("color", "#ECB91C");
                    $(".info").text("5");
    
                });
    
                $(".s1").hover(function () {
                    $(".fa-star").css("color", "silver");
    
                    $(".s1").css("color", "#ECB91C");
    
                    $(".info").text("1");
    
    
                });
                $(".s2").hover(function () {
                    $(".fa-star").css("color", "silver");
    
                    $(".s1,.s2").css("color", "#ECB91C");
                    $(".info").text("2");
    
                });
                $(".s3").hover(function () {
                    $(".fa-star").css("color", "silver");
                    $(".s1,.s2,.s3").css("color", "#ECB91C");
                    $(".info").text("3");
                });
                $(".s4").hover(function () {
                    $(".fa-star").css("color", "silver");
                    $(".s1,.s2,.s3,.s4").css("color", "#ECB91C");
                    $(".info").text("4");
                });
                $(".s5").hover(function () {
                    $(".s1,.s2,.s3,.s4,.s5").css("color", "#ECB91C");
                    $(".info").text("5");
    
                });
         
    
            });