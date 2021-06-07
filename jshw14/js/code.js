
$(document).ready(function () {

    window.addEventListener('scroll',()=>{
       
    });

    $("#menu").on("click","a", function (event) {
        
        event.preventDefault();
        
        let id  = $(this).attr('href');

        let top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });

    $("#MostPopularPosts").click(function(){
        
        $("main div.most-popular-img").slideToggle(500);
        return false;
    });

    $('.scrollUp').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });



});







