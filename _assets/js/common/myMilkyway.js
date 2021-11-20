jQuery(function ($) {
  for (let i = 0; i < 200; i++) {// 「i++」は「i=i+1」と同じ意味
    $('.js-milky-way').append('<div class="p-milky-way"><div class="milky-move"><div class="milky-star"></div></div></div>');
  }
});