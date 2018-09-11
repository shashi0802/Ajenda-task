$(document).ready(function () {
    $(".activity-name").click(function () {
        $('.detail').empty();
        var $popdata = $(this).siblings('.detail-content').clone();
        $('.detail').html($popdata);
        $(".detail").addClass("active");
        $("body").css({"overflow":"hidden"});
        console.log($popdata);
    });

    $(document).on('click', '.close', function () {
        console.log("click")
        $('.detail').removeClass("active");
        $("body").css({"overflow":"scroll"});
    });

    $(document).on('click', 'body', function () {
        $(this).removeClass('active');
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("activity-name") 
            && $(e.target).parents(".detail").length === 0) 
        {
            $(".detail").removeClass("active");
            $("body").css({"overflow":"scroll"});
        }
    });

    
});
