// 銀河鉄道を固定する
let train_pos = jQuery(".js-train").offset().top;
let train_height = jQuery(".js-train").outerHeight();

jQuery(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > train_pos - 40) {
            $("body").css("padding-top", train_height);
            $(".js-train").addClass("fixed");
        } else {
            $("body").css("padding-top", 0);
            $(".js-train").removeClass("fixed");
        }
    });
});