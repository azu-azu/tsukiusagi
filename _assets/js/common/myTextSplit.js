$('.js-txt-split').html(function(i, html) {
  let chars = $.trim(html).split("");
  return '<span>' + chars.join('</span><span>') + '</span>';
});