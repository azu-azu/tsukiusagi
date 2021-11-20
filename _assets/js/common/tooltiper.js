let elements = '';

$(document).ready(function(){
  toolTiper('.tooltiper');
});
let eLtop = '';
let eLleft = '';
let eLtw = '';
let eLth = '';
let eLcontent= '';

function toolTiper(elements) {
  $(elements).each(function(){
      let eLcontent = $(this).attr('data-tooltip');
      let eLtop = $(this).position().top;
      let eLleft = $(this).position().left;
    $(this).append('<span class="tooltip">'+eLcontent+'</span>');
    let eLtw = $(this).find('.tooltip').width(),
        eLth = $(this).find('.tooltip').height();
    console.log(eLtw);
    $(this).find('.tooltip').css({
      "top": (-25 - eLth)+'px'//吹き出しを出す上からの位置
    });
  });
}