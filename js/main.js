// function myfunction(){
//     document.getElementById("pope").style.display="block";
// }
$(document).ready(function(){
    $(".activity").click(function(){
        //$(this).parent().find(".pope").center()
        $(this).parent().find(".pope").css({ "display": "block", "z-inde":99999999999});
        $(this).parent().find(".pope").css({
            top: (($(window).height()  - $(".modal-box").outerHeight()) / 2) + "px"
        });
       
        console.log($(this))
        $("body").css({"overflow": "hidden", "z-index":-1});
    });
    $(".close").click(function(){
        $(".pope").css({ "display": "none"});
        $("body").css({"overflow": "auto"});
    });
});

