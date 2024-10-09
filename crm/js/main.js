// Mobile Click Drop Down
$('.dropnav > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});


// toggle 
$(".nav-toggle").click(function() {
    $(this).toggleClass("on");
    $(".sitenav, .containbody").toggleClass("activated");

    if ($(".sitenav").hasClass("activated")) {
        $(".sitenav").animate({ left: "-100%" }, 100);
    } else {
        $(".sitenav").animate({ left: "0" }, 100);
    }
});